import { hashPassword } from "./passwords.mjs";

const normalizeEmail = (value) => String(value || "").trim().toLowerCase();
const DEFAULT_BOOTSTRAP_ADMIN_EMAIL = "aayushenterprisesweb2026@gmail.com";
const DEFAULT_BOOTSTRAP_ADMIN_PASSWORD = "AayushWeb@2026##";
const DEFAULT_BOOTSTRAP_ADMIN_NAME = "Aayush Enterprises Admin";

const PLACEHOLDER_EMAILS = new Set(["your-admin-email@example.com"]);
const PLACEHOLDER_PASSWORDS = new Set(["your-admin-password"]);

const resolveBootstrapValue = (value, fallback, placeholders = new Set()) => {
  const normalized = String(value || "").trim();
  if (!normalized) {
    return fallback;
  }

  if (placeholders.has(normalized.toLowerCase())) {
    return fallback;
  }

  return normalized;
};

export const getBootstrapAdmin = () => {
  const email = normalizeEmail(
    resolveBootstrapValue(process.env.ADMIN_EMAIL, DEFAULT_BOOTSTRAP_ADMIN_EMAIL, PLACEHOLDER_EMAILS),
  );
  const password = resolveBootstrapValue(
    process.env.ADMIN_PASSWORD,
    DEFAULT_BOOTSTRAP_ADMIN_PASSWORD,
    PLACEHOLDER_PASSWORDS,
  );
  const fullName = resolveBootstrapValue(process.env.ADMIN_NAME, DEFAULT_BOOTSTRAP_ADMIN_NAME);

  if (!email || !password) {
    return null;
  }

  return { email, password, fullName };
};

export const verifyBootstrapAdminCredentials = (email, password) => {
  const bootstrapAdmin = getBootstrapAdmin();
  if (!bootstrapAdmin) {
    return false;
  }

  return normalizeEmail(email) === bootstrapAdmin.email && String(password || "") === bootstrapAdmin.password;
};

export const isBootstrapAdminEmail = (email) => {
  const bootstrapAdmin = getBootstrapAdmin();
  if (!bootstrapAdmin) {
    return false;
  }

  return normalizeEmail(email) === bootstrapAdmin.email;
};

export const seedBootstrapAdmin = async (queryFn) => {
  const bootstrapAdmin = getBootstrapAdmin();
  if (!bootstrapAdmin) {
    return false;
  }

  const passwordHash = hashPassword(bootstrapAdmin.password);

  try {
    await queryFn(
      `
        INSERT INTO admin_users (
          full_name,
          email,
          password_hash,
          role,
          is_active
        ) VALUES (?, ?, ?, 'super_admin', 1)
        ON DUPLICATE KEY UPDATE
          full_name = VALUES(full_name),
          password_hash = VALUES(password_hash),
          role = VALUES(role),
          is_active = VALUES(is_active)
      `,
      [bootstrapAdmin.fullName, bootstrapAdmin.email, passwordHash],
    );
    return true;
  } catch {
    return false;
  }
};

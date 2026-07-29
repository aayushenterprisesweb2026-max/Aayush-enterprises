import { hashPassword } from "./passwords.mjs";

const normalizeEmail = (value) => String(value || "").trim().toLowerCase();

export const getBootstrapAdmin = () => {
  const email = normalizeEmail(process.env.ADMIN_EMAIL);
  const password = String(process.env.ADMIN_PASSWORD || "");
  const fullName = String(process.env.ADMIN_NAME || "Aayush Enterprises Admin").trim();

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

import { cookieHeader, createSessionToken, isSecureRequest } from "../backend/lib/auth.mjs";
import { seedBootstrapAdmin, verifyBootstrapAdminCredentials } from "../backend/lib/admin-bootstrap.mjs";
import { query } from "../backend/lib/db.mjs";
import { verifyPassword } from "../backend/lib/passwords.mjs";

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    res.status(405).json({ authenticated: false, error: "Method not allowed" });
    return;
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
    const { email, password } = body;
    const secret = process.env.ADMIN_SESSION_SECRET;

    if (!secret) {
      res.status(500).json({ authenticated: false, error: "Missing ADMIN_SESSION_SECRET" });
      return;
    }

    if (verifyBootstrapAdminCredentials(email, password)) {
      await seedBootstrapAdmin(query);
      const token = createSessionToken(String(email || "").trim().toLowerCase(), secret);
      res.setHeader("Set-Cookie", cookieHeader(token, 8 * 60 * 60, isSecureRequest(req)));
      res.status(200).json({ authenticated: true });
      return;
    }

    const [rows] = await query(
      `
        SELECT id, full_name, email, password_hash, is_active
        FROM admin_users
        WHERE email = ?
        LIMIT 1
      `,
      [String(email || "").trim()],
    );

    if (rows.length === 0) {
      res.status(401).json({ authenticated: false });
      return;
    }

    const admin = rows[0];
    if (Number(admin.is_active) !== 1 || !verifyPassword(String(password || ""), admin.password_hash)) {
      res.status(401).json({ authenticated: false });
      return;
    }

    await query(
      `
        UPDATE admin_users
        SET last_login_at = CURRENT_TIMESTAMP
        WHERE id = ?
      `,
      [admin.id],
    );

    const token = createSessionToken(admin.email, secret);
    res.setHeader("Set-Cookie", cookieHeader(token, 8 * 60 * 60, isSecureRequest(req)));
    res.status(200).json({ authenticated: true });
  } catch (error) {
    res.status(500).json({
      authenticated: false,
      error: error instanceof Error ? error.message : "Server error",
    });
  }
}

import { applyCommonHeaders, getCookies, verifySessionToken } from "./_auth.js";
import { isBootstrapAdminEmail } from "../backend/lib/admin-bootstrap.mjs";
import { query } from "../backend/lib/db.mjs";

export default async function handler(req, res) {
  applyCommonHeaders(res);
  res.setHeader("Cache-Control", "no-store");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  try {
    const secret = process.env.ADMIN_SESSION_SECRET;
    if (!secret) {
      res.status(500).json({ authenticated: false, error: "Missing ADMIN_SESSION_SECRET" });
      return;
    }

    const cookies = getCookies(req);
    const token = cookies.aayush_admin_session;
    if (!token || !token.includes(".")) {
      res.status(200).json({ authenticated: false });
      return;
    }

    const [encodedPayload] = token.split(".");
    let payload;
    try {
      payload = JSON.parse(Buffer.from(encodedPayload, "base64url").toString("utf8"));
    } catch {
      res.status(200).json({ authenticated: false });
      return;
    }

    if (typeof payload.email !== "string" || !payload.email) {
      res.status(200).json({ authenticated: false });
      return;
    }

    if (isBootstrapAdminEmail(payload.email)) {
      res.status(200).json({
        authenticated: verifySessionToken(token, secret, payload.email),
      });
      return;
    }

    const [rows] = await query(
      `
        SELECT id, email, is_active
        FROM admin_users
        WHERE email = ?
        LIMIT 1
      `,
      [payload.email],
    );

    res.status(200).json({
      authenticated:
        rows.length > 0 &&
        Number(rows[0].is_active) === 1 &&
        verifySessionToken(token, secret, rows[0].email),
    });
  } catch (error) {
    res.status(500).json({
      authenticated: false,
      error: error instanceof Error ? error.message : "Server error",
    });
  }
}

import http from "node:http";
import {
  cookieHeader,
  createSessionToken,
  getCookies,
  isSecureRequest,
  verifySessionToken,
} from "../api/_auth.js";
import { isBootstrapAdminEmail, seedBootstrapAdmin, verifyBootstrapAdminCredentials } from "../backend/lib/admin-bootstrap.mjs";
import { query } from "../backend/lib/db.mjs";
import { verifyPassword } from "../backend/lib/passwords.mjs";

process.env.ADMIN_SESSION_SECRET ||= "local-dev-secret";

const host = process.env.HOST || "127.0.0.1";
const port = Number(process.env.PORT || 3000);

const sendJson = (res, statusCode, payload, headers = {}) => {
  res.writeHead(statusCode, {
    "Content-Type": "application/json",
    ...headers,
  });
  res.end(JSON.stringify(payload));
};

const readBody = (req) =>
  new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => resolve(body));
    req.on("error", reject);
  });

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url || "/", `http://${req.headers.host || `${host}:${port}`}`);

  res.setHeader("Cache-Control", "no-store");

  try {
    if (url.pathname === "/api/admin-status") {
      if (req.method !== "GET") {
        sendJson(res, 405, { authenticated: false, error: "Method not allowed" });
        return;
      }

      const secret = process.env.ADMIN_SESSION_SECRET;
      const cookies = getCookies(req);
      const token = cookies.aayush_admin_session;

      if (!secret || !token || !token.includes(".")) {
        sendJson(res, 200, { authenticated: false });
        return;
      }

      const [encodedPayload] = token.split(".");
      let payload;
      try {
        payload = JSON.parse(Buffer.from(encodedPayload, "base64url").toString("utf8"));
      } catch {
        sendJson(res, 200, { authenticated: false });
        return;
      }

      if (isBootstrapAdminEmail(payload.email)) {
        sendJson(res, 200, { authenticated: verifySessionToken(token, secret, payload.email) });
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

      const authenticated =
        rows.length > 0 &&
        Number(rows[0].is_active) === 1 &&
        verifySessionToken(token, secret, rows[0].email);

      sendJson(res, 200, { authenticated });
      return;
    }

    if (url.pathname === "/api/admin-login") {
      if (req.method !== "POST") {
        sendJson(res, 405, { authenticated: false, error: "Method not allowed" });
        return;
      }

      const rawBody = await readBody(req);
      const body = rawBody ? JSON.parse(rawBody) : {};
      const { email, password } = body;
      const secret = process.env.ADMIN_SESSION_SECRET;

      if (!secret) {
        sendJson(res, 500, { authenticated: false, error: "Missing ADMIN_SESSION_SECRET" });
        return;
      }

      if (verifyBootstrapAdminCredentials(email, password)) {
        await seedBootstrapAdmin(query);
        const token = createSessionToken(String(email || "").trim().toLowerCase(), secret);
        res.setHeader("Set-Cookie", cookieHeader(token, 8 * 60 * 60, isSecureRequest(req)));
        sendJson(res, 200, { authenticated: true });
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
        sendJson(res, 401, { authenticated: false });
        return;
      }

      const admin = rows[0];
      if (Number(admin.is_active) !== 1 || !verifyPassword(String(password || ""), admin.password_hash)) {
        sendJson(res, 401, { authenticated: false });
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
      sendJson(res, 200, { authenticated: true });
      return;
    }

    if (url.pathname === "/api/admin-logout") {
      if (req.method !== "POST") {
        sendJson(res, 405, { authenticated: false, error: "Method not allowed" });
        return;
      }

      res.setHeader("Set-Cookie", cookieHeader("", 0, isSecureRequest(req)));
      sendJson(res, 200, { authenticated: false });
      return;
    }

    sendJson(res, 404, { error: "Not found" });
  } catch (error) {
    sendJson(res, 500, {
      authenticated: false,
      error: error instanceof Error ? error.message : "Server error",
    });
  }
});

server.listen(port, host, () => {
  console.log(`API server listening on http://${host}:${port}`);
});

const shutdown = () => {
  server.close(() => process.exit(0));
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

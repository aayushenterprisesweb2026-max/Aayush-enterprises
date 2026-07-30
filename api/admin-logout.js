import { applyCommonHeaders, cookieHeader, isSecureRequest } from "./_auth.js";

export default async function handler(req, res) {
  applyCommonHeaders(res);
  res.setHeader("Cache-Control", "no-store");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ authenticated: false, error: "Method not allowed" });
    return;
  }

  res.setHeader("Set-Cookie", cookieHeader("", 0, isSecureRequest(req)));
  res.status(200).json({ authenticated: false });
}

import { applyCommonHeaders } from "./_auth.js";
import { isDatabaseConfigured, pingDatabase } from "../backend/lib/db.mjs";

export default async function handler(req, res) {
  applyCommonHeaders(res);
  res.setHeader("Cache-Control", "no-store");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "GET") {
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }

  try {
    const databaseConnected = await pingDatabase();
    res.status(200).json({
      ok: true,
      service: "aayush-enterprises-backend",
      databaseConfigured: isDatabaseConfigured(),
      databaseConnected,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      error: error instanceof Error ? error.message : "Server error",
    });
  }
}

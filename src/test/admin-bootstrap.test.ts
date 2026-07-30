import { afterEach, describe, expect, it } from "vitest";
import {
  getBootstrapAdmin,
  verifyBootstrapAdminCredentials,
} from "../../backend/lib/admin-bootstrap.mjs";

const originalEnv = {
  ADMIN_EMAIL: process.env.ADMIN_EMAIL,
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
  ADMIN_NAME: process.env.ADMIN_NAME,
};

afterEach(() => {
  process.env.ADMIN_EMAIL = originalEnv.ADMIN_EMAIL;
  process.env.ADMIN_PASSWORD = originalEnv.ADMIN_PASSWORD;
  process.env.ADMIN_NAME = originalEnv.ADMIN_NAME;
});

describe("admin bootstrap credentials", () => {
  it("falls back to the documented admin when env values are placeholders", () => {
    process.env.ADMIN_EMAIL = "your-admin-email@example.com";
    process.env.ADMIN_PASSWORD = "your-admin-password";
    delete process.env.ADMIN_NAME;

    const bootstrapAdmin = getBootstrapAdmin();

    expect(bootstrapAdmin).toEqual({
      email: "aayushenterprisesweb2026@gmail.com",
      password: "AayushWeb@2026##",
      fullName: "Aayush Enterprises Admin",
    });
    expect(verifyBootstrapAdminCredentials("aayushenterprisesweb2026@gmail.com", "AayushWeb@2026##")).toBe(true);
  });

  it("still honors explicit custom admin credentials", () => {
    process.env.ADMIN_EMAIL = "admin@custom.test";
    process.env.ADMIN_PASSWORD = "CustomPass!123";
    process.env.ADMIN_NAME = "Custom Admin";

    const bootstrapAdmin = getBootstrapAdmin();

    expect(bootstrapAdmin).toEqual({
      email: "admin@custom.test",
      password: "CustomPass!123",
      fullName: "Custom Admin",
    });
    expect(verifyBootstrapAdminCredentials("admin@custom.test", "CustomPass!123")).toBe(true);
    expect(verifyBootstrapAdminCredentials("admin@custom.test", "wrong")).toBe(false);
  });
});

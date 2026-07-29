type AdminAuthResponse = {
  authenticated: boolean;
};

const apiBase =
  ((import.meta.env.VITE_API_BASE_URL || (import.meta.env.PROD ? "https://api.aayushenterprises.in" : "")) as string).replace(
    /\/$/,
    "",
  );

const getOptions = (method: "GET" | "POST" = "GET", body?: BodyInit) => ({
  method,
  headers: body ? { "Content-Type": "application/json" } : undefined,
  credentials: "include" as const,
  body,
});

export const verifyAdminSession = async () => {
  try {
    const response = await fetch(`${apiBase}/api/admin-status`, getOptions());

    if (!response.ok) {
      return false;
    }

    const data = (await response.json()) as AdminAuthResponse;
    return data.authenticated === true;
  } catch {
    return false;
  }
};

export const signInAdmin = async (email: string, password: string) => {
  try {
    const response = await fetch(
      `${apiBase}/api/admin-login`,
      getOptions("POST", JSON.stringify({ email, password })),
    );

    if (!response.ok) {
      return false;
    }

    const data = (await response.json()) as AdminAuthResponse;
    return data.authenticated === true;
  } catch {
    return false;
  }
};

export const signOutAdmin = async () => {
  try {
    await fetch(`${apiBase}/api/admin-logout`, getOptions("POST"));
  } catch {
    // Ignore logout failures; the local session is server-controlled.
  }
};

type AdminAuthResponse = {
  authenticated: boolean;
};

const configuredApiBase = ((import.meta.env.VITE_API_BASE_URL || "") as string).replace(/\/$/, "");
const fallbackApiBase = typeof window !== "undefined" ? window.location.origin.replace(/\/$/, "") : "";

const apiBases = Array.from(new Set([configuredApiBase, fallbackApiBase].filter(Boolean)));

const getOptions = (method: "GET" | "POST" = "GET", body?: BodyInit) => ({
  method,
  headers: body ? { "Content-Type": "application/json" } : undefined,
  credentials: "include" as const,
  body,
});

const fetchWithFallback = async (path: string, options: RequestInit) => {
  let lastResponse: Response | null = null;

  for (const base of apiBases) {
    try {
      const response = await fetch(`${base}${path}`, options);
      lastResponse = response;

      if (response.status !== 404) {
        return response;
      }
    } catch {
      // Try the next configured origin.
    }
  }

  return lastResponse;
};

export const verifyAdminSession = async () => {
  try {
    const response = await fetchWithFallback("/api/admin-status", getOptions());

    if (!response || !response.ok) {
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
    const response = await fetchWithFallback("/api/admin-login", getOptions("POST", JSON.stringify({ email, password })));
    console.log("Admin login response:", response);

    if (!response || !response.ok) {
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
    await fetchWithFallback("/api/admin-logout", getOptions("POST"));
  } catch {
    // Ignore logout failures; the local session is server-controlled.
  }
};

import { useEffect, useState, type ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { verifyAdminSession } from "@/lib/admin-auth";

type AdminRouteProps = {
  children: ReactNode;
};

const AdminRoute = ({ children }: AdminRouteProps) => {
  const location = useLocation();
  const [isChecking, setIsChecking] = useState(true);
  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    let mounted = true;

    const checkSession = async () => {
      const authenticated = await verifyAdminSession();
      if (!mounted) {
        return;
      }

      setIsAuthed(authenticated);
      setIsChecking(false);
    };

    void checkSession();

    return () => {
      mounted = false;
    };
  }, []);

  if (isChecking) {
    return (
      <div className="min-h-screen bg-[linear-gradient(180deg,hsl(var(--muted))_0%,hsl(var(--background))_36%)]">
        <div className="container flex min-h-screen items-center justify-center">
          <div className="rounded-2xl border-2 border-secondary bg-card px-6 py-5 text-sm font-bold uppercase tracking-wider shadow-bold">
            Checking admin session...
          </div>
        </div>
      </div>
    );
  }

  if (!isAuthed) {
    return <Navigate to="/admin/login" replace state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default AdminRoute;

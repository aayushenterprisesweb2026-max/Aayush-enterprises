import { useEffect, useState, type FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ShieldCheck, ArrowRight, Loader2, LockKeyhole, Mail } from "lucide-react";
import { toast } from "sonner";
import logo from "@/assets/logo-aayush.webp";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInAdmin, verifyAdminSession } from "@/lib/admin-auth";

const AdminLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: { pathname?: string } } | null)?.from?.pathname || "/admin";
  const [email, setEmail] = useState("aayushenterprisesweb2026@gmail.com");
  const [password, setPassword] = useState("AayushWeb@2026##");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let mounted = true;

    const checkSession = async () => {
      const authenticated = await verifyAdminSession();
      if (mounted && authenticated) {
        navigate("/admin", { replace: true });
      }
    };

    void checkSession();

    return () => {
      mounted = false;
    };
  }, [navigate]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const ok = await signInAdmin(email, password);
    setIsLoading(false);

    if (!ok) {
      toast.error("Invalid admin credentials.");
      return;
    }

    toast.success("Admin login successful.");
    navigate(from, { replace: true });
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,hsla(var(--primary)/0.12),transparent_30%),linear-gradient(180deg,hsl(var(--muted))_0%,hsl(var(--background))_45%)]">
      <div className="container flex min-h-screen items-center py-10">
        <div className="grid w-full gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-[2rem] border-2 border-secondary bg-card p-8 shadow-bold md:p-10">
            <div className="inline-flex items-center gap-2 border-2 border-secondary bg-background px-3 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-secondary">
              <ShieldCheck className="h-4 w-4 text-primary" />
              Content Studio
            </div>

            <div className="mt-6 flex items-center gap-4">
              <img src={logo} alt="Aayush Enterprises" className="h-14 w-auto" />
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">Protected Area</div>
                <h1 className="font-display text-3xl uppercase leading-none md:text-4xl">Admin Login</h1>
              </div>
            </div>

            <h2 className="mt-10 max-w-3xl font-display text-5xl uppercase leading-[0.92] md:text-7xl">
              Secure access for the management panel.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Sign in to manage products, services and content from the private workspace. Public visitors will be sent here whenever they try to open `/admin`.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border-2 border-secondary bg-muted/40 p-4">
                <div className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">Access</div>
                <div className="mt-2 font-display text-2xl uppercase">Login only</div>
              </div>
              <div className="rounded-2xl border-2 border-secondary bg-muted/40 p-4">
                <div className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">Session</div>
                <div className="mt-2 font-display text-2xl uppercase">Cookie based</div>
              </div>
              <div className="rounded-2xl border-2 border-secondary bg-muted/40 p-4">
                <div className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">Route</div>
                <div className="mt-2 font-display text-2xl uppercase">/admin</div>
              </div>
            </div>
          </section>

          <Card className="border-2 border-secondary bg-secondary text-secondary-foreground shadow-bold">
            <CardContent className="p-6 md:p-8">
              <div className="inline-flex items-center gap-2 border-2 border-background bg-background px-3 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-secondary">
                <LockKeyhole className="h-4 w-4" />
                Admin Authentication
              </div>

              <h2 className="mt-6 font-display text-4xl uppercase leading-tight md:text-5xl">
                Enter the credentials to continue.
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-secondary-foreground/80">
                The login page is shown every time `/admin` is opened unless a valid session cookie already exists.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="admin-email" className="text-xs font-bold uppercase tracking-[0.25em] text-secondary-foreground/80">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="admin-email"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      autoComplete="email"
                      className="h-12 border-2 border-background bg-background pl-10 text-foreground"
                      placeholder="admin@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="admin-password" className="text-xs font-bold uppercase tracking-[0.25em] text-secondary-foreground/80">
                    Password
                  </Label>
                  <div className="relative">
                    <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="admin-password"
                      type="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      autoComplete="current-password"
                      className="h-12 border-2 border-background bg-background pl-10 text-foreground"
                      placeholder="Enter password"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="h-12 w-full bg-background font-bold uppercase tracking-wider text-foreground hover:bg-background/90"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Signing in
                    </>
                  ) : (
                    <>
                      Sign In <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

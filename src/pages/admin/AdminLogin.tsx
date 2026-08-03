import { useEffect, useState, type FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ShieldCheck, ArrowRight, Loader2, LockKeyhole, Mail, Eye, EyeOff } from "lucide-react";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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
    <div className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,hsla(var(--primary)/0.12),transparent_30%),linear-gradient(180deg,hsl(var(--muted))_0%,hsl(var(--background))_45%)]">
      <div className="container flex min-h-screen items-center py-6 sm:py-8 lg:py-10">
        <div className="grid w-full max-w-7xl gap-6 lg:gap-8 2xl:grid-cols-[minmax(0,1.1fr)_minmax(420px,0.9fr)]">
          <section className="min-w-0 rounded-[2rem] border-2 border-secondary bg-card p-6 shadow-bold sm:p-8 md:p-10">
            <div className="inline-flex items-center gap-2 border-2 border-secondary bg-background px-3 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-secondary">
              <ShieldCheck className="h-4 w-4 text-primary" />
              Content Studio
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
              <img src={logo} alt="Aayush Enterprises" className="h-12 w-auto sm:h-14" />
              <div className="min-w-0">
                <div className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">Protected Area</div>
                <h1 className="font-display text-2xl uppercase leading-none sm:text-3xl md:text-4xl">Admin Login</h1>
              </div>
            </div>

            <h2 className="mt-8 max-w-2xl font-display text-4xl uppercase leading-[0.9] sm:text-5xl md:text-6xl 2xl:text-7xl">
              Secure access for the management panel.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
              Sign in to manage products, services and content from the private workspace. Public visitors will be sent here whenever they try to open `/admin`.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border-2 border-secondary bg-muted/40 p-4">
                <div className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">Access</div>
                <div className="mt-2 font-display text-xl uppercase sm:text-2xl">Login only</div>
              </div>
              <div className="rounded-2xl border-2 border-secondary bg-muted/40 p-4">
                <div className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">Session</div>
                <div className="mt-2 font-display text-xl uppercase sm:text-2xl">Cookie based</div>
              </div>
              <div className="rounded-2xl border-2 border-secondary bg-muted/40 p-4">
                <div className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">Route</div>
                <div className="mt-2 font-display text-xl uppercase sm:text-2xl">/admin</div>
              </div>
            </div>
          </section>

          <Card className="min-w-0 border-2 border-secondary bg-secondary text-secondary-foreground shadow-bold">
            <CardContent className="p-6 sm:p-7 md:p-8">
              <div className="inline-flex items-center gap-2 border-2 border-background bg-background px-3 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-secondary">
                <LockKeyhole className="h-4 w-4" />
                Admin Authentication
              </div>

              <h2 className="mt-6 max-w-md font-display text-3xl uppercase leading-tight sm:text-4xl md:text-5xl">
                Enter the credentials to continue.
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-secondary-foreground/80">
                The login page is shown every time `/admin` is opened unless a valid session cookie already exists.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5" autoComplete="off">
                <div className="space-y-2">
                  <Label htmlFor="admin-email" className="text-xs font-bold uppercase tracking-[0.25em] text-secondary-foreground/80">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="admin-email"
                      name="admin-login-email"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      autoComplete="off"
                      className="h-12 border-2 border-background bg-background pl-10 text-foreground"
                      placeholder="Enter email"
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
                      name="admin-login-password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      autoComplete="off"
                      className="h-12 border-2 border-background bg-background pl-10 pr-12 text-foreground"
                      placeholder="Enter password"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-1 top-1/2 h-10 w-10 -translate-y-1/2 text-muted-foreground hover:bg-transparent hover:text-foreground"
                      onClick={() => setShowPassword((current) => !current)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      title={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
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

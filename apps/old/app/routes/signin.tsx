import { createFileRoute, redirect } from "@tanstack/react-router";
import { Button } from "~/lib/components/ui/button";
import { Card, CardContent } from "~/lib/components/ui/card";
import { Input } from "~/lib/components/ui/input";
import { Label } from "~/lib/components/ui/label";
import { cn } from "~/lib/utils";
import { authClient } from "~/lib/utils/auth-client";

export const Route = createFileRoute("/signin")({
  component: AuthPage,
  beforeLoad: async ({ context }) => {
    if (context.user) {
      throw redirect({
        to: "/dashboard",
      });
    }
  },
});

function AuthPage() {
  return (
    <div className={cn("flex flex-col gap-6")}>
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Welcome back</h1>
                <p className="text-balance text-muted-foreground">
                  Login to your Acme Inc account
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto text-sm underline-offset-2 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <a href="#" className="underline underline-offset-4">
                  Sign up
                </a>
              </div>
            </div>
          </form>
          <div className="relative hidden bg-muted md:block">
            <img
              src="/placeholder.svg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        By clicking continue, you agree to our <a href="#">Terms of Service</a> and{" "}
        <a href="#">Privacy Policy</a>.
      </div>
    </div>

    // <div className="flex min-h-screen items-center justify-center">
    //   <div className="flex flex-col items-center gap-8 rounded-xl border bg-card p-10">
    //     Logo here
    //     <div className="flex flex-col gap-2">
    //       <Button
    //         onClick={async () => {
    //           await authClient.signIn.email({
    //             email: "test@test.com",
    //             password: "test1234",
    //           });
    //         }}
    //         type="button"
    //         variant="outline"
    //         size="lg"
    //       >
    //         Sign in
    //       </Button>
    //       <Button
    //         onClick={async () => {
    //           await authClient.signUp.email({
    //             name: "john doe",
    //             email: "test@test.com",
    //             password: "test1234",
    //           });
    //         }}
    //         type="button"
    //         variant="outline"
    //         size="lg"
    //       >
    //         Sign up
    //       </Button>
    //       <Button
    //         onClick={async () => {
    //           await authClient.signOut();
    //         }}
    //         type="button"
    //         variant="outline"
    //         size="lg"
    //       >
    //         Sign out2
    //       </Button>
    //     </div>
    //     <div className="flex flex-col gap-2">
    //       <Button
    //         onClick={() => {
    //           authClient.signIn.social({ provider: "discord" });
    //         }}
    //         type="button"
    //         variant="outline"
    //         size="lg"
    //       >
    //         Sign in with Discord
    //       </Button>
    //       <Button
    //         onClick={() => {
    //           authClient.signIn.social({ provider: "github" });
    //         }}
    //         type="button"
    //         variant="outline"
    //         size="lg"
    //       >
    //         Sign in with GitHub
    //       </Button>
    //       <Button
    //         onClick={() => {
    //           authClient.signIn.social({ provider: "google" });
    //         }}
    //         type="button"
    //         variant="outline"
    //         size="lg"
    //       >
    //         Sign in with Google
    //       </Button>
    //     </div>
    //   </div>
    // </div>
  );
}

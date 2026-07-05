import { createFileRoute, Navigate } from "@tanstack/react-router";
import { SignIn, SignedIn } from "@clerk/clerk-react";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function LoginPage() {
  return (
    <>
      <SignedIn>
        <Navigate to="/dashboard" />
      </SignedIn>

      <div className="flex min-h-screen items-center justify-center bg-slate-100">
        <SignIn
          routing="path"
          path="/login"
          signUpUrl="/register"
          forceRedirectUrl="/dashboard"
        />
      </div>
    </>
  );
}

import { createFileRoute, Navigate } from "@tanstack/react-router";
import { SignUp, SignedIn } from "@clerk/clerk-react";

export const Route = createFileRoute("/register")({
  component: RegisterPage,
});

function RegisterPage() {
  return (
    <>
      <SignedIn>
        <Navigate to="/dashboard" />
      </SignedIn>

      <div className="flex min-h-screen items-center justify-center bg-slate-100">
        <SignUp
          routing="path"
          path="/register"
          signInUrl="/login"
          forceRedirectUrl="/dashboard"
        />
      </div>
    </>
  );
}

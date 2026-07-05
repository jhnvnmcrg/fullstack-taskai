import { createFileRoute } from "@tanstack/react-router";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

import DashboardLayout from "@/components/layout/DashboardLayout";

export const Route = createFileRoute("/dashboard/")({
  component: DashboardPage,
});

function DashboardPage() {
  return (
    <>
      <SignedOut>
        <RedirectToSignIn redirectUrl="/login" />
      </SignedOut>

      <SignedIn>
        <DashboardLayout>
          <h1 className="text-4xl font-bold">Dashboard</h1>

          <p className="mt-2 text-muted-foreground">Welcome to TaskPilot AI</p>
        </DashboardLayout>
      </SignedIn>
    </>
  );
}

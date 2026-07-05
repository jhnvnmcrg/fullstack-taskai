import { createFileRoute } from "@tanstack/react-router";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

import DashboardLayout from "@/components/layout/DashboardLayout";

import { TodoPage } from "@/components/todo";

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

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <TodoPage />
            </div>

            <div>{/* AI Assistant */}</div>
          </div>
        </DashboardLayout>
      </SignedIn>
    </>
  );
}

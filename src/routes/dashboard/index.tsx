import { createFileRoute } from "@tanstack/react-router";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

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
        <main className="min-h-screen bg-slate-100 p-8">
          <h1 className="text-4xl font-bold">Dashboard</h1>

          <p className="mt-2 text-muted-foreground">Welcome to TaskPilot AI</p>

          {/* Todo List */}

          {/* AI Assistant */}
        </main>
      </SignedIn>
    </>
  );
}

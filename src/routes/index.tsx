import { createFileRoute, Link } from "@tanstack/react-router";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold">TaskPilot AI</h1>

        <p className="text-lg text-muted-foreground">
          Smart AI-powered task management.
        </p>

        <SignedOut>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link to="/login">Login</Link>
            </Button>

            <Button variant="outline" asChild>
              <Link to="/register">Register</Link>
            </Button>
          </div>
        </SignedOut>

        <SignedIn>
          <Button asChild>
            <Link to="/dashboard">Go to Dashboard</Link>
          </Button>
        </SignedIn>
      </div>
    </main>
  );
}

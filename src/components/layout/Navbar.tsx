import { UserButton } from "@clerk/clerk-react";

export default function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <div>
        <h1 className="text-xl font-bold">TaskPilot AI</h1>
      </div>

      <UserButton
        appearance={{
          elements: {
            avatarBox: "w-10 h-10",
          },
        }}
        afterSignOutUrl="/login"
      />
    </header>
  );
}

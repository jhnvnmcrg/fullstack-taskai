import { Link } from "@tanstack/react-router";
import { LayoutDashboard, CheckSquare, Bot, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="flex h-full w-64 flex-col border-r bg-white">
      <div className="border-b p-6">
        <h2 className="text-lg font-semibold">Navigation</h2>
      </div>

      <nav className="flex flex-col gap-2 p-4">
        <Link
          to="/dashboard"
          className="flex items-center gap-3 rounded-lg p-3 hover:bg-slate-100"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link
          to="/dashboard"
          className="flex items-center gap-3 rounded-lg p-3 hover:bg-slate-100"
        >
          <CheckSquare size={20} />
          My Tasks
        </Link>

        <Link
          to="/dashboard"
          className="flex items-center gap-3 rounded-lg p-3 hover:bg-slate-100"
        >
          <Bot size={20} />
          AI Assistant
        </Link>

        <Link
          to="/dashboard"
          className="flex items-center gap-3 rounded-lg p-3 hover:bg-slate-100"
        >
          <Settings size={20} />
          Settings
        </Link>
      </nav>
    </aside>
  );
}

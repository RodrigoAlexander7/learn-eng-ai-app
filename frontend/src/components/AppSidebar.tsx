import {
  BarChart,
  MessageSquare,
  ClipboardList,
  GraduationCap,
  History,
  User,
  BotMessageSquare
} from "lucide-react";
import Link from "next/link";

export function AppSidebar() {
  return (
    <aside className="w-64 bg-gray-50 text-zinc-800 dark:bg-zinc-900 dark:text-gray-200 flex flex-col h-screen">
      <div className="p-6 border-b border-gray-200 dark:border-zinc-800 flex items-center gap-2">
        <BotMessageSquare size={32} className="text-sky-500" />
        <h1 className="text-2xl font-bold">LearnEng AI</h1>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        <Link
          href="/chat"
          className="flex items-center p-3 text-base font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors"
        >
          <MessageSquare className="w-6 h-6 text-sky-500" />
          <span className="ml-3">Chat</span>
        </Link>
        <Link
          href="/roadmap"
          className="flex items-center p-3 text-base font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors"
        >
          <GraduationCap className="w-6 h-6 text-sky-500" />
          <span className="ml-3">Roadmap</span>
        </Link>
        <Link
          href="/practice"
          className="flex items-center p-3 text-base font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors"
        >
          <ClipboardList className="w-6 h-6 text-sky-500" />
          <span className="ml-3">Practice</span>
        </Link>
        <Link
          href="/stats"
          className="flex items-center p-3 text-base font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors"
        >
          <BarChart className="w-6 h-6 text-sky-500" />
          <span className="ml-3">Statistics</span>
        </Link>
        <Link
          href="/history"
          className="flex items-center p-3 text-base font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors"
        >
          <History className="w-6 h-6 text-sky-500" />
          <span className="ml-3">History</span>
        </Link>
      </nav>
      <div className="p-4 border-t border-gray-200 dark:border-zinc-800">
        <Link
          href="/profile"
          className="flex items-center p-3 text-base font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors"
        >
          <User className="w-6 h-6 text-sky-500" />
          <span className="ml-3">User</span>
        </Link>
      </div>
    </aside>
  );
}

import { HiChartBar, HiChatAlt2, HiClipboardList, HiAcademicCap, HiClock, HiUserCircle } from "react-icons/hi";
import Link from "next/link";

export function AppSidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col h-screen">
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-2xl font-bold">LearnEng AI</h1>
      </div>
      <nav className="flex-1 p-2 space-y-2">
        <Link href="/chat" className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-gray-700">
          <HiChatAlt2 className="w-6 h-6" />
          <span className="ml-3">Chat</span>
        </Link>
        <Link href="/roadmap" className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-gray-700">
          <HiAcademicCap className="w-6 h-6" />
          <span className="ml-3">Roadmap</span>
        </Link>
        <Link href="/practice" className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-gray-700">
          <HiClipboardList className="w-6 h-6" />
          <span className="ml-3">Practice</span>
        </Link>
        <Link href="/stats" className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-gray-700">
          <HiChartBar className="w-6 h-6" />
          <span className="ml-3">Statistics</span>
        </Link>
        <Link href="/history" className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-gray-700">
          <HiClock className="w-6 h-6" />
          <span className="ml-3">History</span>
        </Link>
      </nav>
      <div className="p-4 border-t border-gray-700">
        <Link href="/profile" className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-gray-700">
          <HiUserCircle className="w-6 h-6" />
          <span className="ml-3">User</span>
        </Link>
      </div>
    </aside>
  );
}

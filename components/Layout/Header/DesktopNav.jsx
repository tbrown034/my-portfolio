import Link from "next/link.js";
import { NAV_LINKS } from "@/lib/constants";

export default function DesktopNav() {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm font-medium text-gray-600 dark:text-neutral-200 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 border-b-2 border-transparent hover:border-gray-300 dark:hover:border-slate-600 pb-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-sm"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
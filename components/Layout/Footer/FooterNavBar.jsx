import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

const FooterNavBar = () => {
  return (
    <nav className="flex flex-wrap gap-6 text-sm">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="font-medium text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 border-b-2 border-transparent hover:border-gray-300 dark:hover:border-slate-600 pb-0.5"
        >
          {link.label}
        </Link>
      ))}
      <Link
        href="/resume"
        className="font-medium text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 border-b-2 border-transparent hover:border-gray-300 dark:hover:border-slate-600 pb-0.5"
      >
        Resume
      </Link>
    </nav>
  );
};

export default FooterNavBar;
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

const FooterNavBar = () => {
  return (
    <nav className="flex flex-wrap gap-6 text-sm">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="font-medium text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
        >
          {link.label}
        </Link>
      ))}
      <Link
        href="/resume"
        className="font-medium text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
      >
        Resume
      </Link>
    </nav>
  );
};

export default FooterNavBar;
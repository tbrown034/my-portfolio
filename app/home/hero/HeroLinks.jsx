import Link from "next/link";
import {
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
  // BlueskyIcon,
} from "@/components/Icons/SocialIcons";
import { SOCIAL_LINKS, PERSONAL_INFO } from "@/lib/constants";

export default function HeroLinks() {
  return (
    <div className="space-y-6">
      {/* Three section cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          href="#journalism"
          className="group p-4 border-b-2 border-gray-200 dark:border-white/10 hover:border-blue-800 dark:hover:border-blue-300 transition-colors"
        >
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
            Investigations
          </h3>
          <p className="text-sm text-gray-500 dark:text-neutral-400">
            Public records, data analysis
          </p>
        </Link>

        <Link
          href="#coding"
          className="group p-4 border-b-2 border-gray-200 dark:border-white/10 hover:border-blue-800 dark:hover:border-blue-300 transition-colors"
        >
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
            Web Development
          </h3>
          <p className="text-sm text-gray-500 dark:text-neutral-400">
            Next.js, React, TypeScript
          </p>
        </Link>

        <Link
          href="#visualizations"
          className="group p-4 border-b-2 border-gray-200 dark:border-white/10 hover:border-blue-800 dark:hover:border-blue-300 transition-colors"
        >
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
            Data
          </h3>
          <p className="text-sm text-gray-500 dark:text-neutral-400">
            Analysis, visualization, open records
          </p>
        </Link>
      </div>

      {/* Contact links */}
      <div className="flex flex-wrap gap-6 justify-center md:justify-start">
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="flex items-center gap-2 px-1 py-0.5 text-gray-600 dark:text-neutral-100 hover:text-blue-600 dark:hover:text-blue-400 hover:underline transition-colors"
        >
          <EmailIcon className="w-5 h-5" />
          <span className="text-sm">Email</span>
        </a>
        <a
          href={SOCIAL_LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-1 py-0.5 text-gray-600 dark:text-neutral-100 hover:text-blue-600 dark:hover:text-blue-400 hover:underline transition-colors"
        >
          <GitHubIcon className="w-5 h-5" />
          <span className="text-sm">GitHub</span>
        </a>
        <a
          href={SOCIAL_LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-1 py-0.5 text-gray-600 dark:text-neutral-100 hover:text-blue-600 dark:hover:text-blue-400 hover:underline transition-colors"
        >
          <LinkedInIcon className="w-5 h-5" />
          <span className="text-sm">LinkedIn</span>
        </a>
        {/* <a
          href={SOCIAL_LINKS.bluesky}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-1 py-0.5 text-gray-600 dark:text-neutral-100 hover:text-blue-600 dark:hover:text-blue-400 hover:underline transition-colors"
        >
          <BlueskyIcon className="w-5 h-5" />
          <span className="text-sm">Bluesky</span>
        </a> */}
      </div>
    </div>
  );
}
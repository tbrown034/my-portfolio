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
      {/* Section cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Link
          href="#journalism"
          className="group p-3 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg hover:border-blue-600 dark:hover:border-blue-400 hover:shadow-md transition-all"
        >
          <h3 className="font-semibold text-sm text-gray-900 dark:text-white">
            Journalism
          </h3>
          <p className="text-sm text-gray-600 dark:text-neutral-300 mt-0.5">
            Investigations, accountability
          </p>
        </Link>

        <Link
          href="#coding"
          className="group p-3 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg hover:border-blue-600 dark:hover:border-blue-400 hover:shadow-md transition-all"
        >
          <h3 className="font-semibold text-sm text-gray-900 dark:text-white">
            Web Development
          </h3>
          <p className="text-sm text-gray-600 dark:text-neutral-300 mt-0.5">
            Next.js, React, TypeScript
          </p>
        </Link>

        <Link
          href="#visualizations"
          className="group p-3 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg hover:border-blue-600 dark:hover:border-blue-400 hover:shadow-md transition-all"
        >
          <h3 className="font-semibold text-sm text-gray-900 dark:text-white">
            Data Visualization
          </h3>
          <p className="text-sm text-gray-600 dark:text-neutral-300 mt-0.5">
            Charts, maps, analysis
          </p>
        </Link>

        <Link
          href="#coding"
          className="group p-3 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg hover:border-blue-600 dark:hover:border-blue-400 hover:shadow-md transition-all"
        >
          <h3 className="font-semibold text-sm text-gray-900 dark:text-white">
            Full-Stack Apps
          </h3>
          <p className="text-sm text-gray-600 dark:text-neutral-300 mt-0.5">
            Deployed, production projects
          </p>
        </Link>

      </div>

      {/* Contact links */}
      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="flex items-center gap-2 px-3 py-2 min-h-[44px] text-gray-700 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 underline decoration-1 underline-offset-2 hover:decoration-2 transition-colors"
        >
          <EmailIcon className="w-5 h-5" />
          <span className="text-sm font-medium">Email</span>
        </a>
        <a
          href={SOCIAL_LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 min-h-[44px] text-gray-700 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 underline decoration-1 underline-offset-2 hover:decoration-2 transition-colors"
        >
          <GitHubIcon className="w-5 h-5" />
          <span className="text-sm font-medium">GitHub</span>
        </a>
        <a
          href={SOCIAL_LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 min-h-[44px] text-gray-700 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 underline decoration-1 underline-offset-2 hover:decoration-2 transition-colors"
        >
          <LinkedInIcon className="w-5 h-5" />
          <span className="text-sm font-medium">LinkedIn</span>
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

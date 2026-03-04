import {
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
} from "@/components/Icons/SocialIcons";
import { SOCIAL_LINKS, PERSONAL_INFO } from "@/lib/constants";

export default function HeroLinks() {
  return (
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
    </div>
  );
}

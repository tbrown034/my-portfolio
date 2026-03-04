import { SOCIAL_LINKS, PERSONAL_INFO } from "@/lib/constants";

export default function Links() {
  return (
    <div>
      <div className="border-b border-gray-200 dark:border-neutral-700 pb-2 mb-4">
        <h2 className="text-sm uppercase tracking-wider font-semibold text-gray-600 dark:text-neutral-400">
          Direct Contact
        </h2>
      </div>

      <div className="flex flex-col gap-2 text-sm text-gray-700 dark:text-neutral-300">
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="hover:text-blue-800 dark:hover:text-blue-400 transition-colors"
        >
          {PERSONAL_INFO.email}
        </a>
        <a
          href={SOCIAL_LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-800 dark:hover:text-blue-400 transition-colors"
        >
          LinkedIn
        </a>
        <a
          href={SOCIAL_LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-800 dark:hover:text-blue-400 transition-colors"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

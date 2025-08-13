import {
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
  BlueskyIcon,
} from "../Icons/SocialIcons";

export default function Links() {
  return (
    <section className="flex text-lg rounded-lg sm:justify-center">
      <div className="inline-block p-2 space-y-2 border-opacity-50 rounded-lg ">
        <div className="flex flex-wrap justify-center gap-8">
          <a
            className="flex flex-col items-center justify-center p-3 transition-all duration-300 ease-in-out transform rounded-xl bg-gradient-to-br from-white/70 to-gray-100/60 dark:from-gray-800/70 dark:to-gray-900/60 backdrop-blur-md border border-white/30 dark:border-gray-600/30 shadow-lg shadow-gray-200/20 dark:shadow-gray-900/40 hover:from-white/80 hover:to-gray-50/70 dark:hover:from-gray-700/80 dark:hover:to-gray-800/70 hover:scale-105 hover:shadow-xl hover:shadow-gray-200/30 dark:hover:shadow-gray-900/50 hover:border-white/40 dark:hover:border-gray-500/40"
            href="mailto:trevorbrown.web@gmail.com"
          >
            <EmailIcon className="w-icon-sm h-icon-sm" />
            <p className="text-sm font-semibold text-center">E-Mail</p>
          </a>

          <a
            className="flex flex-col items-center justify-center p-3 transition-all duration-300 ease-in-out transform rounded-xl bg-gradient-to-br from-white/70 to-gray-100/60 dark:from-gray-800/70 dark:to-gray-900/60 backdrop-blur-md border border-white/30 dark:border-gray-600/30 shadow-lg shadow-gray-200/20 dark:shadow-gray-900/40 hover:from-white/80 hover:to-gray-50/70 dark:hover:from-gray-700/80 dark:hover:to-gray-800/70 hover:scale-105 hover:shadow-xl hover:shadow-gray-200/30 dark:hover:shadow-gray-900/50 hover:border-white/40 dark:hover:border-gray-500/40"
            href="https://github.com/tbrown034/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="w-icon-sm h-icon-sm" />
            <p className="text-sm font-semibold text-center">GitHub</p>
          </a>

          <a
            className="flex flex-col items-center justify-center p-3 transition-all duration-300 ease-in-out transform rounded-xl bg-gradient-to-br from-white/70 to-gray-100/60 dark:from-gray-800/70 dark:to-gray-900/60 backdrop-blur-md border border-white/30 dark:border-gray-600/30 shadow-lg shadow-gray-200/20 dark:shadow-gray-900/40 hover:from-white/80 hover:to-gray-50/70 dark:hover:from-gray-700/80 dark:hover:to-gray-800/70 hover:scale-105 hover:shadow-xl hover:shadow-gray-200/30 dark:hover:shadow-gray-900/50 hover:border-white/40 dark:hover:border-gray-500/40"
            href="https://www.linkedin.com/in/trevorabrown/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="w-icon-sm h-icon-sm" />
            <p className="text-sm font-semibold text-center">LinkedIn</p>
          </a>
          <a
            className="flex flex-col items-center justify-center p-3 transition-all duration-300 ease-in-out transform rounded-xl bg-gradient-to-br from-white/70 to-gray-100/60 dark:from-gray-800/70 dark:to-gray-900/60 backdrop-blur-md border border-white/30 dark:border-gray-600/30 shadow-lg shadow-gray-200/20 dark:shadow-gray-900/40 hover:from-white/80 hover:to-gray-50/70 dark:hover:from-gray-700/80 dark:hover:to-gray-800/70 hover:scale-105 hover:shadow-xl hover:shadow-gray-200/30 dark:hover:shadow-gray-900/50 hover:border-white/40 dark:hover:border-gray-500/40"
            href="https://trevthewebdev.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BlueskyIcon className="w-icon-sm h-icon-sm" />
            <p className="text-sm font-semibold text-center">Bluesky</p>
          </a>
        </div>
      </div>
    </section>
  );
}

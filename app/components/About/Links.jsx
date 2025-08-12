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
            className="flex flex-col items-center justify-center p-1 transition-all duration-300 ease-in-out transform rounded-lg cursor-pointer hover:bg-blue-300 dark:hover:bg-blue-700 hover:scale-105 hover:shadow-lg"
            href="mailto:trevorbrown.web@gmail.com"
          >
            <EmailIcon className="w-icon-sm h-icon-sm" />
            <p className="text-sm font-semibold text-center">E-Mail</p>
          </a>

          <a
            className="flex flex-col items-center justify-center p-1 transition-all duration-300 ease-in-out transform rounded-lg cursor-pointer hover:bg-blue-300 dark:hover:bg-blue-700 hover:scale-105 hover:shadow-lg"
            href="https://github.com/tbrown034/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="w-icon-sm h-icon-sm" />
            <p className="text-sm font-semibold text-center">GitHub</p>
          </a>

          <a
            className="flex flex-col items-center justify-center p-1 transition-all duration-300 ease-in-out transform rounded-lg cursor-pointer hover:bg-blue-300 dark:hover:bg-blue-700 hover:scale-105 hover:shadow-lg"
            href="https://www.linkedin.com/in/trevorabrown/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="w-icon-sm h-icon-sm" />
            <p className="text-sm font-semibold text-center">LinkedIn</p>
          </a>
          <a
            className="flex flex-col items-center justify-center p-1 transition-all duration-300 ease-in-out transform rounded-lg cursor-pointer hover:bg-blue-300 dark:hover:bg-blue-700 hover:scale-105 hover:shadow-lg"
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

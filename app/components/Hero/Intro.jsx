import Link from "next/link";
import {
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
  BlueskyIcon,
} from "../Icons/SocialIcons";

export default function Intro() {
  const work = [
    { 
      href: "#journalism", 
      title: "Investigations",
      description: "Public records, data analysis" 
    },
    { 
      href: "#coding", 
      title: "Development",
      description: "Next.js, React, TypeScript"
    },
    { 
      href: "/resume", 
      title: "Resume",
      description: "CV + selected clips"
    }
  ];

  return (
    <section className="space-y-4 sm:space-y-5 mt-6 sm:mt-4 animate-gentleRevealDelay2">
      {/* Work sections - clean grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {work.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="group block space-y-1 pb-3 border-b border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300"
            style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            <h3 className="font-medium text-gray-900 dark:text-gray-100 text-sm">
              {item.title}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              {item.description}
            </p>
          </Link>
        ))}
      </div>

      {/* Contact - styled like about me sections */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <a 
          href="mailto:trevorbrown.web@gmail.com"
          className="px-4 py-3 rounded-lg bg-gray-800/[0.08] dark:bg-gray-100/[0.12] hover:bg-gray-800/[0.12] dark:hover:bg-gray-100/[0.18] hover:-translate-y-0.5 transition-all duration-[2000ms] flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-300"
          style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          <EmailIcon className="w-4 h-4" />
          <span className="text-sm font-medium">Email</span>
        </a>
        <a 
          href="https://github.com/tbrown034"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-3 rounded-lg bg-gray-800/[0.08] dark:bg-gray-100/[0.12] hover:bg-gray-800/[0.12] dark:hover:bg-gray-100/[0.18] hover:-translate-y-0.5 transition-all duration-[2000ms] flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-300"
          style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          <GitHubIcon className="w-4 h-4" />
          <span className="text-sm font-medium">GitHub</span>
        </a>
        <a 
          href="https://www.linkedin.com/in/trevorabrown/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-3 rounded-lg bg-gray-800/[0.08] dark:bg-gray-100/[0.12] hover:bg-gray-800/[0.12] dark:hover:bg-gray-100/[0.18] hover:-translate-y-0.5 transition-all duration-[2000ms] flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-300"
          style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          <LinkedInIcon className="w-4 h-4" />
          <span className="text-sm font-medium">LinkedIn</span>
        </a>
        <a 
          href="https://trevthewebdev.bsky.social"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-3 rounded-lg bg-gray-800/[0.08] dark:bg-gray-100/[0.12] hover:bg-gray-800/[0.12] dark:hover:bg-gray-100/[0.18] hover:-translate-y-0.5 transition-all duration-[2000ms] flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-300"
          style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          <BlueskyIcon className="w-4 h-4" />
          <span className="text-sm font-medium">Bluesky</span>
        </a>
      </div>
    </section>
  );
}
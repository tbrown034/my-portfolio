"use client";
import Link from "next/link";
import Image from "next/image";
import photo from "@/public/images/trevorPhoto2.jpeg";
import Mug from "./Mug";
import {
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
  BlueskyIcon,
} from "@/components/Icons/SocialIcons";
import { SOCIAL_LINKS, PERSONAL_INFO } from "@/lib/constants";

export default function IAm({ showDesktopLayout }) {
  // Medium layout for tablets (simplified single column)
  if (showDesktopLayout === "medium") {
    return (
      <div className="space-y-6">
        {/* Main content in single column */}
        <div className="space-y-4">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
            I spent 15+ years chasing public records and holding power accountable.
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Now I build{" "}
            <Link href="#journey" className="font-medium text-blue-800 dark:text-blue-300 hover:underline hover:decoration-2 hover:underline-offset-2 transition-colors duration-200">
              interactive tools
            </Link>{" "}
            that transform complex data into clear insights. I turn government databases, public records and raw information into stories people can actually understand and use.
          </p>
          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            My work bridges{" "}
            <Link href="#journalism" className="font-medium text-blue-800 dark:text-blue-300 hover:underline hover:decoration-2 hover:underline-offset-2 transition-colors duration-200">
              investigative reporting
            </Link>{" "}
            and{" "}
            <Link href="#coding" className="font-medium text-blue-800 dark:text-blue-300 hover:underline hover:decoration-2 hover:underline-offset-2 transition-colors duration-200">
              modern web development
            </Link> – 
            building responsive sites,{" "}
            <Link href="#graphics" className="font-medium text-blue-800 dark:text-blue-300 hover:underline hover:decoration-2 hover:underline-offset-2 transition-colors duration-200">
              data visualizations
            </Link>, 
            and applications that turn raw data into understanding.
            Each field demands deep research, precision, and an instinct for discovery.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Whether I'm digging into public records or architecting a React application, 
            my guiding principle is the same: make truth and information accessible, 
            and make the experience seamless.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row gap-3 mt-4">
          <Link 
            href="/resume" 
            className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-blue-800 dark:bg-blue-600 rounded-lg hover:bg-blue-900 dark:hover:bg-blue-700 transition-colors duration-200"
          >
            View Resume
          </Link>
          <a 
            href="#about"
            className="inline-flex items-center justify-center px-6 py-3 font-semibold text-gray-900 dark:text-gray-100 border-2 border-gray-900 dark:border-gray-100 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            Contact
          </a>
        </div>

        {/* Three section cards */}
        <div className="grid grid-cols-3 gap-4">
          <Link href="#journalism" className="group p-4 border-b-2 border-gray-200 dark:border-gray-700 hover:border-blue-800 dark:hover:border-blue-300 transition-colors">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Investigations</h3>
            <p className="text-sm text-gray-500 dark:text-gray-500">Public records, data analysis</p>
          </Link>
          
          <Link href="#coding" className="group p-4 border-b-2 border-gray-200 dark:border-gray-700 hover:border-blue-800 dark:hover:border-blue-300 transition-colors">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Development</h3>
            <p className="text-sm text-gray-500 dark:text-gray-500">Next.js, React, TypeScript</p>
          </Link>
          
          <Link href="/resume" className="group p-4 border-b-2 border-gray-200 dark:border-gray-700 hover:border-blue-800 dark:hover:border-blue-300 transition-colors">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Resume</h3>
            <p className="text-sm text-gray-500 dark:text-gray-500">CV + work samples</p>
          </Link>
        </div>

        {/* Contact links */}
        <div className="flex gap-6">
          <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <EmailIcon className="w-5 h-5" />
            <span className="text-sm">Email</span>
          </a>
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <GitHubIcon className="w-5 h-5" />
            <span className="text-sm">GitHub</span>
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <LinkedInIcon className="w-5 h-5" />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a href={SOCIAL_LINKS.bluesky} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <BlueskyIcon className="w-5 h-5" />
            <span className="text-sm">Bluesky</span>
          </a>
        </div>
      </div>
    );
  }

  // Desktop layout for large screens (2 columns)
  if (showDesktopLayout === "large") {
    return (
      <div className="space-y-6">
        {/* Main content in 2 columns - aligned with space-between */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Column 1: Subhead and Lede */}
          <div className="flex flex-col justify-between h-full">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              I spent 15+ years chasing public records and holding power accountable.
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
              Now I build{" "}
              <Link href="#journey" className="font-medium text-blue-800 dark:text-blue-300 hover:underline hover:decoration-2 hover:underline-offset-2 transition-colors duration-200">
                interactive tools
              </Link>{" "}
              that transform complex data into clear insights. I turn government databases, public records and raw information into stories people can actually understand and use.
            </p>
          </div>

          {/* Column 2: Nutgraph and body */}
          <div className="flex flex-col justify-between h-full">
            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              My work bridges{" "}
              <Link href="#journalism" className="font-medium text-blue-800 dark:text-blue-300 hover:underline hover:decoration-2 hover:underline-offset-2 transition-colors duration-200">
                investigative reporting
              </Link>{" "}
              and{" "}
              <Link href="#coding" className="font-medium text-blue-800 dark:text-blue-300 hover:underline hover:decoration-2 hover:underline-offset-2 transition-colors duration-200">
                modern web development
              </Link> – 
              building responsive sites,{" "}
              <Link href="#graphics" className="font-medium text-blue-800 dark:text-blue-300 hover:underline hover:decoration-2 hover:underline-offset-2 transition-colors duration-200">
                data visualizations
              </Link>{" "}
              and applications that turn raw data into understanding.
              Each field demands deep research, precision and an instinct for discovery.
            </p>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
              Whether I'm digging into public records or architecting a React application, 
              my guiding principle is the same: make truth and information accessible, 
              and make the experience seamless.
            </p>
            
            {/* Let's build something together link */}
            <a href="#about" className="inline-flex items-center gap-3 text-gray-900 dark:text-gray-100 group cursor-pointer mt-4">
              <span className="flex items-center gap-3 border-b-2 border-blue-800 dark:border-blue-300 group-hover:border-blue-900 dark:group-hover:border-blue-200 transition-colors duration-200">
                <span className="text-lg font-bold">Let's build something together</span>
                <svg 
                  className="w-6 h-6 text-blue-800 dark:text-blue-300 transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-200 animate-gentlePulse" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7v10m0 0H7m10 0L7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row gap-3 mt-4">
          <Link 
            href="/resume" 
            className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-blue-800 dark:bg-blue-600 rounded-lg hover:bg-blue-900 dark:hover:bg-blue-700 transition-colors duration-200"
          >
            View Resume
          </Link>
          <a 
            href="#about"
            className="inline-flex items-center justify-center px-6 py-3 font-semibold text-gray-900 dark:text-gray-100 border-2 border-gray-900 dark:border-gray-100 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            Contact
          </a>
        </div>

        {/* Three section cards */}
        <div className="grid grid-cols-3 gap-4">
          <Link href="#journalism" className="group p-4 border-b-2 border-gray-200 dark:border-gray-700 hover:border-blue-800 dark:hover:border-blue-300 transition-colors">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Investigations</h3>
            <p className="text-sm text-gray-500 dark:text-gray-500">Public records, data analysis</p>
          </Link>
          
          <Link href="#coding" className="group p-4 border-b-2 border-gray-200 dark:border-gray-700 hover:border-blue-800 dark:hover:border-blue-300 transition-colors">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Development</h3>
            <p className="text-sm text-gray-500 dark:text-gray-500">Next.js, React, TypeScript</p>
          </Link>
          
          <Link href="/resume" className="group p-4 border-b-2 border-gray-200 dark:border-gray-700 hover:border-blue-800 dark:hover:border-blue-300 transition-colors">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Resume</h3>
            <p className="text-sm text-gray-500 dark:text-gray-500">CV + work samples</p>
          </Link>
        </div>

        {/* Contact links */}
        <div className="flex gap-6">
          <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <EmailIcon className="w-5 h-5" />
            <span className="text-sm">Email</span>
          </a>
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <GitHubIcon className="w-5 h-5" />
            <span className="text-sm">GitHub</span>
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <LinkedInIcon className="w-5 h-5" />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a href={SOCIAL_LINKS.bluesky} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <BlueskyIcon className="w-5 h-5" />
            <span className="text-sm">Bluesky</span>
          </a>
        </div>
      </div>
    );
  }

  // Vertical layout (mobile and default)
  return (
    <section className="space-y-4">
      {/* About Me Section */}
      <div className="space-y-3">
        <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500 dark:text-gray-500">
          About Me
        </h2>
        
        {/* Main content */}
        <div className="space-y-4 max-w-4xl">
          {/* Subhead */}
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
            I spent 15+ years chasing public records and holding power accountable.
          </h3>
          
          {/* Lede */}
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Now I build{" "}
            <Link href="#journey" className="font-medium text-blue-800 dark:text-blue-300 hover:underline hover:decoration-2 hover:underline-offset-2 transition-colors duration-200">
              interactive tools
            </Link>{" "}
            that transform complex data into clear insights. I turn government databases, public records and raw information into stories people can actually understand and use.
          </p>
          
          {/* Nutgraph */}
          <div className="space-y-3">
            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              My work bridges{" "}
              <Link href="#journalism" className="font-medium text-blue-800 dark:text-blue-300 hover:underline hover:decoration-2 hover:underline-offset-2 transition-colors duration-200">
                investigative reporting
              </Link>{" "}
              and{" "}
              <Link href="#coding" className="font-medium text-blue-800 dark:text-blue-300 hover:underline hover:decoration-2 hover:underline-offset-2 transition-colors duration-200">
                modern web development
              </Link> – 
              building responsive sites,{" "}
              <Link href="#graphics" className="font-medium text-blue-800 dark:text-blue-300 hover:underline hover:decoration-2 hover:underline-offset-2 transition-colors duration-200">
                data visualizations
              </Link>{" "}
              and applications that turn raw data into understanding.
              Each field demands deep research, precision and an instinct for discovery.
            </p>
            
            {/* Body */}
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Whether I'm digging into public records or architecting a React application, 
              my guiding principle is the same: make truth and information accessible, 
              and make the experience seamless.
            </p>
          </div>
        </div>
      </div>
      
      {/* Mobile image placement */}
      <div className="flex justify-center my-6 sm:hidden">
        <Mug />
      </div>

      {/* Primary action buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mt-6">
        <Link 
          href="/resume" 
          className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-blue-800 dark:bg-blue-600 rounded-lg hover:bg-blue-900 dark:hover:bg-blue-700 transition-colors duration-200"
        >
          View Resume
        </Link>
        <a 
          href={SOCIAL_LINKS.github} 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 justify-center px-6 py-3 font-semibold text-gray-900 dark:text-gray-100 border-2 border-gray-900 dark:border-gray-100 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
      </div>

      {/* Let's build something together link - mobile only */}
      <a href="#about" className="flex items-center gap-3 text-gray-900 dark:text-gray-100 group cursor-pointer mt-4 sm:hidden">
        <span className="flex items-center gap-3 border-b-2 border-blue-800 dark:border-blue-300 group-hover:border-blue-900 dark:group-hover:border-blue-200 transition-colors duration-200">
          <span className="text-lg font-bold">Let's build something together</span>
          <svg 
            className="w-6 h-6 text-blue-800 dark:text-blue-300 transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-200 animate-gentlePulse" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7v10m0 0H7m10 0L7 7" />
          </svg>
        </span>
      </a>

      {/* Three section cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        <Link href="#journalism" className="group p-4 border-b-2 border-gray-200 dark:border-gray-700 hover:border-blue-800 dark:hover:border-blue-300 transition-colors">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Investigations</h3>
          <p className="text-sm text-gray-500 dark:text-gray-500">Public records, data analysis</p>
        </Link>
        
        <Link href="#coding" className="group p-4 border-b-2 border-gray-200 dark:border-gray-700 hover:border-blue-800 dark:hover:border-blue-300 transition-colors">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Development</h3>
          <p className="text-sm text-gray-500 dark:text-gray-500">Next.js, React, TypeScript</p>
        </Link>
        
        <Link href="/resume" className="group p-4 border-b-2 border-gray-200 dark:border-gray-700 hover:border-blue-800 dark:hover:border-blue-300 transition-colors">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Resume</h3>
          <p className="text-sm text-gray-500 dark:text-gray-500">CV + work samples</p>
        </Link>
      </div>

      {/* Contact links */}
      <div className="flex flex-wrap gap-6 justify-center mt-6">
        <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <EmailIcon className="w-5 h-5" />
          <span className="text-sm">Email</span>
        </a>
        <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <GitHubIcon className="w-5 h-5" />
          <span className="text-sm">GitHub</span>
        </a>
        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <LinkedInIcon className="w-5 h-5" />
          <span className="text-sm">LinkedIn</span>
        </a>
        <a href={SOCIAL_LINKS.bluesky} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <BlueskyIcon className="w-5 h-5" />
          <span className="text-sm">Bluesky</span>
        </a>
      </div>
    </section>
  );
}
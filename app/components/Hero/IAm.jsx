"use client";
import Link from "next/link";
import Image from "next/image";
import photo from "../../../public/images/trevorPhoto2.jpeg";
import Mug from "./Mug";
import {
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
  BlueskyIcon,
} from "../Icons/SocialIcons";

export default function IAm({ showDesktopLayout }) {
  // Desktop layout for large screens (3 columns)
  if (showDesktopLayout === "large") {
    return (
      <>
        {/* Column 1: Subhead and Lede */}
        <div className="col-span-1 space-y-4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
            I spent 15+ years chasing public records and holding power accountable.
          </h3>
          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            Now I build interactive tools that help people make sense of complex information.
          </p>
        </div>

        {/* Column 2: Nutgraph and body */}
        <div className="col-span-1 space-y-4">
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            My work bridges{" "}
            <Link href="#journalism" className="font-medium text-gray-700 dark:text-gray-300 underline decoration-2 underline-offset-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              investigative reporting
            </Link>{" "}
            and{" "}
            <Link href="#coding" className="font-medium text-gray-700 dark:text-gray-300 underline decoration-2 underline-offset-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              modern web development
            </Link> – 
            responsive sites,{" "}
            <Link href="#graphics" className="font-medium text-gray-700 dark:text-gray-300 underline decoration-2 underline-offset-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              data visualizations
            </Link>, 
            and applications that turn raw data into understanding.
            Both demand deep research, precision, and an instinct for discovery.
          </p>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Whether I'm digging into public records or architecting a React application, 
            my guiding principle is the same: make truth and information accessible, 
            and make the experience seamless.
          </p>

          <div className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-gray-100 group cursor-pointer pt-4">
            <span className="border-b-2 border-gray-900 dark:border-gray-100 group-hover:border-blue-600 dark:group-hover:border-blue-400 transition-colors duration-200">
              Let's build something together
            </span>
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </>
    );
  }

  // Desktop layout for medium screens (2 columns)
  if (showDesktopLayout === "medium") {
    return (
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
            I spent 15+ years chasing public records and holding power accountable.
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Now I build interactive tools that help people make sense of complex information.
          </p>
          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            My work bridges{" "}
            <Link href="#journalism" className="font-medium text-gray-700 dark:text-gray-300 underline decoration-2 underline-offset-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              investigative reporting
            </Link>{" "}
            and{" "}
            <Link href="#coding" className="font-medium text-gray-700 dark:text-gray-300 underline decoration-2 underline-offset-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              modern web development
            </Link> – 
            responsive sites,{" "}
            <Link href="#graphics" className="font-medium text-gray-700 dark:text-gray-300 underline decoration-2 underline-offset-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              data visualizations
            </Link>, 
            and applications that turn raw data into understanding.
            Both demand deep research, precision, and an instinct for discovery.
          </p>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Whether I'm digging into public records or architecting a React application, 
            my guiding principle is the same: make truth and information accessible, 
            and make the experience seamless.
          </p>

          <div className="flex items-center gap-2 text-base font-semibold text-gray-900 dark:text-gray-100 group cursor-pointer">
            <span className="border-b-2 border-gray-900 dark:border-gray-100 group-hover:border-blue-600 dark:group-hover:border-blue-400 transition-colors duration-200">
              Let's build something together
            </span>
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  // Mobile and default layout
  return (
    <section className="space-y-8">
      {/* About Me Section */}
      <div className="space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500 dark:text-gray-500">
          About Me
        </h2>
        
        {/* Main content */}
        <div className="space-y-6 max-w-4xl">
          {/* Subhead */}
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
            I spent 15+ years chasing public records and holding power accountable.
          </h3>
          
          {/* Lede */}
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Now I build{" "}
            <Link href="#journey" className="font-bold text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              interactive tools
            </Link>{" "}
            that help people make sense of complex information.
          </p>
          
          {/* Nutgraph */}
          <div className="space-y-4">
            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              My work bridges{" "}
              <Link href="#journalism" className="font-medium text-gray-700 dark:text-gray-300 underline decoration-2 underline-offset-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                investigative reporting
              </Link>{" "}
              and{" "}
              <Link href="#coding" className="font-medium text-gray-700 dark:text-gray-300 underline decoration-2 underline-offset-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                modern web development
              </Link> – 
              responsive sites,{" "}
              <Link href="#graphics" className="font-medium text-gray-700 dark:text-gray-300 underline decoration-2 underline-offset-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                data visualizations
              </Link>, 
              and applications that turn raw data into understanding.
              Both demand deep research, precision, and an instinct for discovery.
            </p>
            
            {/* Body */}
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Whether I'm digging into public records or architecting a React application, 
              my guiding principle is the same: make truth and information accessible, 
              and make the experience seamless.
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-base font-semibold text-gray-900 dark:text-gray-100 group cursor-pointer">
            <span className="border-b-2 border-gray-900 dark:border-gray-100 group-hover:border-blue-600 dark:group-hover:border-blue-400 transition-colors duration-200">
              Let's build something together
            </span>
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Mobile image placement */}
      <div className="flex justify-center my-8 sm:hidden">
        <Mug />
      </div>

      {/* Three section cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
        <Link href="#journalism" className="group p-4 border-b-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Investigations</h3>
          <p className="text-sm text-gray-500 dark:text-gray-500">Public records, data analysis</p>
        </Link>
        
        <Link href="#coding" className="group p-4 border-b-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Development</h3>
          <p className="text-sm text-gray-500 dark:text-gray-500">Next.js, React, TypeScript</p>
        </Link>
        
        <Link href="/resume" className="group p-4 border-b-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Resume</h3>
          <p className="text-sm text-gray-500 dark:text-gray-500">CV + selected clips</p>
        </Link>
      </div>

      {/* Contact links */}
      <div className="flex flex-wrap gap-6 justify-center mt-8">
        <a href="mailto:trevorbrown.web@gmail.com" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <EmailIcon className="w-5 h-5" />
          <span className="text-sm">Email</span>
        </a>
        <a href="https://github.com/tbrown034" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <GitHubIcon className="w-5 h-5" />
          <span className="text-sm">GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/trevorabrown/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <LinkedInIcon className="w-5 h-5" />
          <span className="text-sm">LinkedIn</span>
        </a>
        <a href="https://trevthewebdev.bsky.social" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <BlueskyIcon className="w-5 h-5" />
          <span className="text-sm">Bluesky</span>
        </a>
      </div>
    </section>
  );
}
// webProjects.js

export const webProjects = [
  {
    id: 1,
    title: "Keith Brown DDS",
    type: "Professional",
    tag: "SEO & Marketing",
    workInProgress: false,
    image: "/images/kabdds-screenshot-aug11.png",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Google Ads",
      "Vercel",
    ],
    description:
      "I took over a failing ad campaign and defunct website for a dentist in Naperville, IL. Built a modern Next.js site from scratch with a blog, practice highlights and an appointment request form that instantly notifies the doctor. Now manage $2K/month ad budget and more than tripled new patient revenue in the last year through targeted Google Ads campaigns with detailed conversion tracking.",
    githubLink: "https://github.com/tbrown034/kab-dentist-2024",
    siteLink: "https://keithbrowndds.com/",
  },
  {
    id: 2,
    title: "My Expiry",
    type: "Hobby",
    tag: "AI Integration",
    workInProgress: true,
    image: "/images/expirty-screenshot-aug11.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "OpenAI API",
    ],
    description:
      "Tired of buying and wasting food, I developed My Expiry. The app allows users to quickly track what food they have, get recommended shelf-life times and storage tips. Users can return to see if their food is still fresh, near deadline, or needs to go. Built with Next.js, TypeScript, PostgreSQL, and OpenAI API for intelligent food management.",
    githubLink: "https://github.com/tbrown034/my-expiry",
    siteLink: "https://my-expiry.vercel.app/",
  },
  {
    id: 3,
    title: "Reflectyr",
    type: "Hobby",
    tag: "Auth & Database",
    workInProgress: true,
    image: "/images/reflectyr-screenshot-aug11.png",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "TMDB API",
    ],
    description:
      "This Letterboxd-inspired platform allows users to search, view and add movies and TV shows to their personal lists. Recently added OpenAI integration so once you've built a list of shows or movies, you can get AI-powered recommendations for what to watch next. Features TMDB API for comprehensive media data, PostgreSQL for data persistence and a sleek interface built with Next.js 15 and Prisma.",
    githubLink: "https://github.com/tbrown034/ReflectYr",
    siteLink: "https://reflectyr.vercel.app/",
  },
  {
    id: 4,
    title: "ReStub",
    type: "Hobby",
    tag: "Modern Stack",
    workInProgress: true,
    image: "/images/restub-screenshot-aug11.png",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS 4",
      "React 19",
    ],
    description:
      "I was talking to a friend about a baseball game we went to a few years ago and we couldn't remember the score. That gave me the idea for ReStub – an app that lets users enter details of MLB, NBA, NFL and NHL games they attended, no matter how far back. Uses Anthropic AI integration to automatically look up and fill in missing game details. Hoping to add photo upload feature soon.",
    githubLink: "https://github.com/tbrown034/restub",
    siteLink: "https://restub.vercel.app/",
  },
];

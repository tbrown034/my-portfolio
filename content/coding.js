// webProjects.js

export const webProjects = [
  {
    id: 1,
    title: "Keith Brown DDS: Dental Practice Website",
    type: "Professional",
    tag: "SEO & Marketing",
    workInProgress: false,
    image: "/images/kabdds-screenshot-oct25.png",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Google Ads",
      "Python",
      "Clerk Auth",
      "Nodemailer",
    ],
    createdDate: "2024",

    description:
      "Production dental practice site that increased online bookings by 33%. Manage SEO and a $2,000/month Google Ads campaign. Admin dashboard integrates GA4, CallRail and Google Business Profile with real-time ad controls, a Python billing pipeline and an AI chat interface.",
    githubLink: "https://github.com/tbrown034/kab-dentist-2024",
    siteLink: "https://keithbrowndds.com/",
  },
  {
    id: 2,
    title: "sort(id): Media Ranking and Sharing Platform",
    type: "Hobby",
    tag: "Auth & Database",
    workInProgress: true,
    image: "/images/reflectyr-screenshot-aug11.png",
    technologies: [
      "Next.js",
      "NextAuth.js",
      "PostgreSQL",
      "TMDB API",
    ],
    createdDate: "2024",
    description:
      "Media ranking platform where users create and share ranked lists of movies, TV, books and anime. Built with drag-and-drop interfaces, TMDB API integration, NextAuth.js authentication and PostgreSQL persistence.",
    githubLink: null,
    siteLink: "https://reflectyr.vercel.app/",
  },
  {
    id: 3,
    title: "Food Xpiry: AI-Powered Grocery Expiration Tracker",
    type: "Hobby",
    tag: "AI Integration",
    workInProgress: true,
    image: "/images/expirty-screenshot-aug11.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL (Neon)",
      "Prisma",
      "Anthropic AI API",
    ],
    createdDate: "2025",
    description:
      "Grocery tracker that reduces food waste using USDA FoodKeeper data and Anthropic API shelf-life estimates. Users log items, get storage tips and track expiration dates with PostgreSQL persistence via Neon.",
    githubLink: "https://github.com/tbrown034/food-xpiry",
    siteLink: "https://food-xpiry.vercel.app/",
  },
  {
    id: 5,
    title: "StuddyBuddy: AI Study Platform for Web Developers",
    type: "Coding",
    tag: "Coding/Learning",
    workInProgress: false,
    image: "/images/studdy-buddy-screenshot.png",
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "OpenAI API",
      "Tailwind CSS",
    ],
    createdDate: "2025",
    description:
      "AI study platform for web developers. Users select a tech stack and skill level to get interactive quiz sessions powered by GPT-4o Mini alongside curated documentation links.",
    githubLink: "https://github.com/tbrown034/study-buddy",
    siteLink: "https://studdy-buddy-rho.vercel.app/",
  },
];

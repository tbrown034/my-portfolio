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
      "JavaScript",
      "Google Ads",
      "Nodemailer",
    ],
    createdDate: "2024",

    description:
      "Rebuilt a defunct dental practice site in Naperville with Next.js, adding a booking form, service information and a blog. Took over a $2,000/month Google Ads campaign and optimized it to more than triple new patient bookings.",
    githubLink: "https://github.com/tbrown034/kab-dentist-2024",
    siteLink: "https://keithbrowndds.com/",
  },
  {
    id: 3,
    title: "My Expiry",
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
      "Tired of wasting food, I created My Expiry – a tracking app that lets users log groceries, get shelf-life estimates and storage tips via Anthropic AI's API, and check whether items are fresh or expiring.",
    githubLink: "https://github.com/tbrown034/my-expiry",
    siteLink: "https://my-expiry.vercel.app/",
  },
  {
    id: 2,
    title: "Reflectyr",
    type: "Hobby",
    tag: "Auth & Database",
    workInProgress: true,
    image: "/images/reflectyr-screenshot-aug11.png",
    technologies: [
      "Next.js",
      "NextAuth.js",
      "PostgreSQL",
      "TMDB API",
      "Anthropic AI API",
    ],
    createdDate: "2024",
    description:
      "Reflectyr is a Letterboxd-style platform where users build movie and TV lists with TMDB data and get AI-powered watch recommendations. Features NextAuth.js for authentication and a PostgreSQL database for persistence.",
    githubLink: "https://github.com/tbrown034/refelectyr_project",
    siteLink: "https://reflectyr.vercel.app/",
  },
  // {
  //   id: 4,
  //   title: "ReStub",
  //   type: "Hobby",
  //   tag: "Modern Stack",
  //   workInProgress: true,
  //   image: "/images/restub-screenshot-aug11.png",
  //   technologies: [
  //     "Next.js",
  //     "React",
  //     "TypeScript",
  //     "PostgreSQL (Neon)",
  //     "Tailwind CSS",
  //   ],
  //   description:
  //     "I was talking to a friend about a baseball game we went to a few years ago and we couldn't remember the score. That gave me the idea for ReStub – an app that lets users enter details of MLB, NBA, NFL and NHL games they attended, no matter how far back. Uses Anthropic AI integration to automatically look up and fill in missing game details. Hoping to add photo upload feature soon.",
  //   githubLink: "https://github.com/tbrown034/restub",
  //   siteLink: "https://restub.vercel.app/",
  // },
];

// webProjects.js
import weather from "../../public/images/weather.png";
import brew from "../../public/images/beer.png";
import campaign from "../../public/images/campaign.png";
import dental from "../../public/images/kabdds.png";
import dentalgpt from "../../public/images/dentalgpt.png";
import shipit from "../../public/images/shipit1.png";
import RocketClicker from "../../public/images/Screen Shot 2023-08-11 at 1.35.59 PM.png";

export const webProjects = [
  {
    id: 1,
    title: "Keith Brown DDS",
    image: dental,
    technologies: [
      "JavaScript",
      "React",
      "Next.js",
      "React-Icons",
      "HeroIcons",
      "Daisy UI",
      "GoogleMaps",
    ],
    description:
      "A Next.js storefront for a dentist. Features include about, financing, location, FAQ, services, and appointment booking.",
    githubLink: "https://github.com/tbrown034/kab-dental",
    siteLink: "https://kab-dental.vercel.app/",
  },
  {
    id: 2,
    title: "Weather Forecast",
    image: weather,
    technologies: [
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "HeroIcons",
      "Headless UI",
      "Fetch",
      "Framer Motion",
    ],
    description:
      "A playful project that uses WeatherAPI for real-time weather forecasts. Tailwind CSS and HeroIcons were used for interface design.",
    githubLink: "https://my-weather-app-silk-six.vercel.app/",
    siteLink: "https://github.com/tbrown034/my-weather-app",
  },
  {
    id: 3,
    title: "Campaign Finance Visualizer",
    image: campaign,
    technologies: [
      "JavaScript",
      "React",
      "Next.js",
      "Chart.js",
      "Tailwind CSS",
      "Fetch",
    ],
    description:
      "A tool for visualizing campaign finance data using Chart.js. Allows detailed views of FEC data and tracks election cycle funds.",
    githubLink: "https://github.com/tbrown034/campaign-finance-tracker",
    siteLink: "https://campaign-finance-tracker.vercel.app/",
  },
  {
    id: 4,
    title: "RocketClicker",
    image: RocketClicker,
    technologies: [
      "JavaScript",
      "React",
      "Next.js",
      "Headless UI",
      "HeroIcons",
      "Vercel Analytics",
      "Framer Motion",
      "Tailwind CSS",
    ],
    description:
      "A fun idle cookie-clicker style game that let's you explore the skies through the eyes of Rocky Racoon.",
    githubLink: "https://github.com/tbrown034/moving-cost-estimator",
    siteLink: "https://rocket-clicker.vercel.app/",
  },
  {
    id: 5,
    title: "DentalGPT",
    image: dentalgpt,
    technologies: [
      "JavaScript",
      "React",
      "Next.js",
      "Framer Motion",
      "Tailwind CSS",
      "Open AI",
    ],
    description:
      "An AI-powered application that uses Chat-GTP's API to answer dental care questions, with guardrails for topic relevance.",
    githubLink: "https://github.com/tbrown034/dental-gpt-second-try",
    siteLink: "https://dental-gpt-second-try.vercel.app/",
  },
  {
    id: 6,
    title: "MyBrewApp",
    image: brew,
    technologies: ["JavaScript", "React", "Next.js", "Fetch", "Tailwind CSS"],
    description:
      "A simple Fetch site, built overnight, that allows users to learn about random breweries.",
    githubLink: "https://github.com/tbrown034/brewery",
    siteLink: "https://brewery-taupe.vercel.app/",
  },
];

// webProjects.js

import weather from "../../public/images/weather.png";
import brew from "../../public/images/beer.png";
import campaign from "../../public/images/campaign.png";
import dental from "../../public/images/kabdds.png";
import dentalgpt from "../../public/images/dentalgpt.png";
import shipit from "../../public/images/shipit1.png";

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
      "Built with Next.JS for SEO optimization, I created this storefront website for a dentist as a freelance project. The app features about, fianicng, location, FAQ, Services and a contact/make an appointment form.",
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
      "MyWeatherApp, a project I created for fun, harnesses the power of WeatherAPI to fetch accurate, real-time weather data based on user-input zip codes. The interface is designed with Tailwind CSS, HeroIcons, and Headless UI for a sleek, modern user experience with Smooth scrolling, countdown timers and future weather forecasting .",
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
      "As a project to test out visualzing api data, I created this simple, but powerful and fast, tool for tracking campaign finance data and visualizing the influence of money in politics. The app allows users to search for politicians and view detailed FEC data, including total funds raised over the last three election cycles, also represented in an interactive line graph crated with Chart.js for data visualization, styled with Tailwind CSS for a modern UI.",

    githubLink: "https://github.com/tbrown034/campaign-finance-tracker",
    siteLink: "https://campaign-finance-tracker.vercel.app/",
  },
  {
    id: 4,
    title: "ShipIt",
    image: shipit,
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
      "MyShipItApp is (work in process) app idea that leverages Chat GPT's API to estimate a users'moving needs based on their response to a few simple questions. The site offers a clean interface, responsive design and an easy UX.",

    githubLink: "https://github.com/tbrown034/moving-cost-estimator",
    siteLink: "https://moving-cost-estimator.vercel.app/about",
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
      "Another project showing how to leverage the power of AI for a simple use. This also uses Chat-GTP's API to receive input (a questions about dental care) and then provide an answer with guardrails that prevent it from talking about non-dental issues.",
    githubLink: "https://github.com/tbrown034/dental-gpt-second-try",
    siteLink: "https://dental-gpt-second-try.vercel.app/",
  },
  {
    id: 6,
    title: "MyBrewApp",
    image: brew,
    technologies: ["JavaScript", "React", "Next.js", "Fetch", "Tailwind CSS"],
    description:
      "Another simple Fetch website made over one night that allows user to select and learn about random breweries.",
    githubLink: "https://github.com/tbrown034/brewery",
    siteLink: "https://brewery-taupe.vercel.app/",
  },
];

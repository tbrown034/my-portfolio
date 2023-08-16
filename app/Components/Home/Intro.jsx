import { motion } from "framer-motion";

export default function Intro() {
  return (
    <motion.p
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      // I don't know why's it's being weird with the line height - 8/15
      className="text-xl leading:none sm:leading-normal md:leading-normal lg:leading-normal sm:text-2xl lg:text-3xl font-robotoSlab"
    >
      Blending{" "}
      <a
        href="#coding"
        className="border-b-4 border-blue-800 dark:border-blue-200 dark:hover:border-blue-600 hover:border-blue-400 active:border-blue-100"
      >
        modern web development
      </a>{" "}
      skills with insights I’ve cultivated from more than a decade’s worth of
      experience as an{" "}
      <a
        href="#journalism"
        className="border-b-4 border-blue-800 dark:border-blue-200 hover:border-blue-400 dark:hover:border-blue-600 active:border-blue-100 "
      >
        award-winning investigative reporter
      </a>
      , I tell compelling stories and build powerful applications for the web.{" "}
      <a
        href="#about"
        className="border-b-4 border-blue-800 dark:border-blue-200 hover:border-blue-400 dark:hover:border-blue-600 active:border-blue-100"
      >
        Let's connect
      </a>{" "}
      and start building.
    </motion.p>
  );
}

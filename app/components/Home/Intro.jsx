import { motion } from "framer-motion";

export default function Intro() {
  const linkClasses = "relative inline-block font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-all duration-300 ease-out after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full focus:after:w-full";

  return (
    <section className="max-w-4xl">
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
        className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-robotoSlab text-gray-700 dark:text-gray-300 leading-relaxed"
      >
        Blending{" "}
        <a href="#coding" className={linkClasses}>
          modern web development
        </a>{" "}
        skills with insights I've cultivated from more than a decade's worth of
        experience as an{" "}
        <a href="#journalism" className={linkClasses}>
          award-winning investigative reporter
        </a>
        , I tell compelling stories and build powerful applications for the web.{" "}
        <a href="#about" className={linkClasses}>
          Let's connect
        </a>{" "}
        and start building.
      </motion.p>
    </section>
  );
}

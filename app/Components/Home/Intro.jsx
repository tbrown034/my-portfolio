import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="flex flex-col justify-center ">
      <div className="flex flex-col justify-around col-span-8 gap-8">
        <motion.h3
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="text-xl sm:text-2xl lg:text-3xl font-robotoSlab"
        >
          Blending{" "}
          <span className="border-b-2 border-blue-800 dark:border-blue-200 hover:border-blue-400 active:border-blue-100">
            modern web development
          </span>{" "}
          skills with insights I’ve cultivated from more than a decade’s worth
          of experience as an{" "}
          <span className="border-b-2 border-blue-800 dark:border-blue-200 hover:border-blue-400 active:border-blue-100">
            award-winning investigative reporter
          </span>
          , I tell compelling stories and build powerful applications for the
          web.{" "}
          <span className="border-b-2 border-blue-800 dark:border-blue-200 hover:border-blue-400 active:border-blue-100">
            Let's connect
          </span>{" "}
          and start building.
        </motion.h3>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
export default function IAm() {
  return (
    <>
      <div className="flex flex-col flex-wrap gap-1 text-xl font-bold text-blue-800 dark:text-blue-200 xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-montserrat">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          I'm a FullStack Developer,
        </motion.h2>

        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Investigative Reporter &
        </motion.h2>

        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          Data Visualizer
        </motion.h2>
      </div>
    </>
  );
}

import { motion } from "framer-motion";

export default function HelloWorld() {
  return (
    <motion.header 
      className="mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black font-montserrat text-gray-900 dark:text-gray-100 leading-tight mb-2">
        Trevor Brown
      </h1>
      
      <p className="text-2xl sm:text-3xl font-light text-blue-600 dark:text-blue-400 leading-relaxed">
        Investigative journalist + developer + data visualizer
      </p>

      <p className="text-sm font-mono text-gray-500 dark:text-gray-400 mt-1">
        Building and shipping whether it's from the newsroom or terminal
      </p>
    </motion.header>
  );
}

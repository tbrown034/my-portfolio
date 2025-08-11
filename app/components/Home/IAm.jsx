import { motion } from "framer-motion";

export default function IAm() {
  const roles = [
    { text: "I'm a FullStack Developer,", delay: 0.5 },
    { text: "Investigative Reporter &", delay: 0.8 },
    { text: "Data Visualizer", delay: 1.1 }
  ];

  return (
    <section className="mb-6 sm:mb-8">
      <div className="flex flex-col gap-3 sm:gap-4">
        {roles.map((role, index) => (
          <motion.h2
            key={index}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-montserrat text-slate-800 dark:text-slate-200 leading-tight"
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              delay: role.delay, 
              duration: 0.6, 
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              scale: 1.02, 
              color: "#3b82f6",
              transition: { duration: 0.2 }
            }}
          >
            {role.text}
          </motion.h2>
        ))}
      </div>
    </section>
  );
}

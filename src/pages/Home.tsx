import { Hero } from "../components/hero";
import { motion } from "motion/react";
import { Section2 } from "../components/section-2";
import { Section3 } from "../components/section-3";
import { Section4 } from "../components/section-4";

export const Home = () => {
  return (
    <motion.div
      key={location.pathname}
      initial={{
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
      exit={{
        opacity: 0,
        scale: 0.9,
        y: 30,
        transition: {
          delay: 0.4,
          duration: 0.4,
          ease: "easeOut",
        },
      }}
      className="w-full overflow-hidden"
    >
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
    </motion.div>
  );
};

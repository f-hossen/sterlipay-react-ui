import { motion } from "motion/react";
import React from "react";

type EaseInProps = {
  children: React.ReactNode;
};

export const EaseIn = ({ children }: EaseInProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        ease: "easeInOut",
      }}
      viewport={{ once: true, amount: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

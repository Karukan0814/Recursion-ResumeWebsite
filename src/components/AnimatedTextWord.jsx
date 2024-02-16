import React from "react";
import { motion } from "framer-motion";

const AnimatedTextWord = ({ text }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.06 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className="text-center  justify-center"
    >
      {words.map((word, index) => (
        <motion.h1
          variants={child}
          style={{ marginRight: "16px" }}
          key={index}
          className="blue-gradient_text font-semibold drop-shadow head-text"
        >
          {word}
        </motion.h1>
      ))}
    </motion.div>
  );
};

export default AnimatedTextWord;

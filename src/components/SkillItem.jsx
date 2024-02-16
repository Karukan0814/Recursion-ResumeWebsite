import React from "react";

import { fish } from "../assets/icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SkillItem = ({ skill, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 200 }}
      animate={inView ? { opacity: 1, y: 0, x: [0, -5, 5, -5, 5, 5] } : {}}
      transition={{ duration: 1 + index / 5 }}
    >
      <div
        className="block-container w-16 h-16 sm:w-20 sm:h-20"
        key={skill.name}
      >
        <div className="ball bubble flex justify-center items-center">
          <img
            src={skill.imageUrl}
            alt={skill.name}
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SkillItem;

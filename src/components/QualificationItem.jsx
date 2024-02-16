import React from "react";

import { fish } from "../assets/icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const QualificationItem = ({ qualification, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 150 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 2 + index / 2 }}
    >
      <div className=" block-container relative  justify-center items-center">
        <img
          src={fish}
          alt={"test"}
          className="w-32 sm:w-48 h-32 sm:h-48 object-contain"
        />
        <span className="absolute flex text-xs sm:text-base font-poppins font-semibold blue-gradient_text top-1/2 left-1/3 transform -translate-x-1/3 -translate-y-1/2">
          {qualification.name}
        </span>
      </div>
    </motion.div>
  );
};

export default QualificationItem;

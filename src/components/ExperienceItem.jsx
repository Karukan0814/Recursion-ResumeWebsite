import React from "react";

import { fish } from "../assets/icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ExperienceItem = ({ experience, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`flex flex-row w-full items-center justify-center space-x-1  ${
          index % 2 === 0 ? "flex-row" : "flex-row-reverse"
        }`}
        key={index}
      >
        <div
          className="block-container w-32 h-32 sm:w-48 sm:h-48 mx-6"
          key={index}
        >
          <div className="ball bubble flex justify-center items-center overflow-hidden text-center ">
            <div className="flex-col ">
              <h3 className="blue-gradient_text text-sm sm:text-xl font-poppins font-semibold my-2">
                {experience.title}
              </h3>

              <p className="text-slate-600 text-xs font-poppins font-semibold">
                {experience.position}
              </p>

              <p className="text-blue-600 text-xs font-poppins font-semibold">
                {experience.date}
              </p>
            </div>
          </div>
        </div>
        <div className="block-container glassmorphism rounded-xl px-5 py-2  w-1/2  min-h-48 mx-6 flex items-center overflow-hidden">
          <ul className="list-disc space-y-2">
            {experience.points.map((point, idx) => (
              <li
                key={`experience-point-${idx}`}
                className="text-slate-700 font-normal text-sm "
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceItem;

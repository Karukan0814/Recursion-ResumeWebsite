import React from "react";
import AnimatedTextWord from "./AnimatedTextWord";
import { motion } from "framer-motion";

const Abstraction = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <div>
      <div className="block-container rounded-xl glassmorphism ">
        <div className="flex flex-col text-center px-5 py-10 items-center justify-center">
          <AnimatedTextWord text={"Welcome to Karukan's Portofolio!"} />
          <motion.div
            style={{ display: "flex", flexWrap: "wrap" }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-col gap-3 text-slate-500 w-4/6"
          >
            <motion.p variants={itemVariants} className="text-base sm:text-lg">
              I am a full-stack engineer, mainly focusing on backend
              development, and currently based in Tokyo.
            </motion.p>
            <motion.p variants={itemVariants} className="text-xs">
              "かるかん"は主に東京を拠点としているフルスタックエンジニアです。バックエンド寄り。
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Abstraction;

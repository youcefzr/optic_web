import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./lamp";
import { Glasses } from "lucide-react";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex flex-col items-center"
      >
        <Glasses className="w-16 h-16 text-blue-400 mb-6" />
        <motion.h1
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Votre Vision, <br /> Notre Passion
        </motion.h1>
        <motion.p
          className="mt-4 text-slate-400 text-center max-w-xl"
        >
          Découvrez notre collection exclusive de lunettes, où style et confort se rencontrent pour sublimer votre regard.
        </motion.p>
      </motion.div>
    </LampContainer>
  );
}
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-5 md:px-10 lg:px-20 mt-20 md:mt-32 lg:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start lg:max-w-[50%]">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-2 px-3 border border-[#7042f88b] lg:opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-2 h-4 w-4" />
          <h1 className="Welcome-text text-xs lg:text-base">
            SUDHEE TECSTASY
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-3 md:gap-4 lg:gap-6 mt-3 md:mt-4 lg:mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-[600px] w-full"
        >
          <span>Welcome to </span>
          <span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              SUDHEE TECSTASY{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-emerald-400 text-sm md:text-base lg:text-lg"
        >
          Welcome to Sudhee-Tecstasy, where innovation meets celebration! Join us on a journey of technological marvels, creative brilliance, and unforgettable moments as we fuse knowledge and excitement in this grand celebration of our college fest.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] md:max-w-[250px] lg:max-w-[300px] mt-6 md:mt-8 lg:mt-10"
        >
          Explore our TECSTASY!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center lg:max-w-[50%] lg:h-auto mt-6 md:mt-0"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
          className="lg:max-w-[80%] xl:max-w-[70%] 2xl:max-w-[60%]"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
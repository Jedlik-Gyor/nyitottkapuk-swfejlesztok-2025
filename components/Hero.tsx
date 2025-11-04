"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import profilepic from "@/public/images/profile1.png";

type Size = {
  width: number;
  height: number;
  text: string;
  text2: string;
};

const sizes: Size[] = [
  { width: 500, height: 300, text: "", text2: "" },
  { width: 300, height: 500, text: "Szoftverfejlesztő", text2: `és tesztelő - ${new Date().getFullYear() + 1}` },
  { width: 500, height: 500, text: "", text2: "" },
];

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-x-clip py-96" id="hero">
      <div className="absolute inset-0 z-0 flex items-start justify-center overflow-hidden md:items-center">
        <h1 className="text-center text-[3rem] text-gray-800/30 dark:text-purple-400/10 font-bold whitespace-nowrap transition-colors md:text-[8rem]">
          GYŐRI SZC<br /> JEDLIK ÁNYOS <br /> TECHNIKUM <br />
        </h1>
      </div>

      <div className="absolute inset-0 z-10 flex w-full items-center justify-center">
        <Image alt="profile picture" className="relative z-20 mx-auto w-[170px]" src={profilepic} />
        <motion.div
          animate={{
            rotate: 360,
          }}
          className="absolute inset-0"
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {sizes.map((size, index) => (
            <motion.div
              className={`absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col justify-between shadow-[0_0_120px_inset]  shadow-gray-500/30 dark:shadow-purple-200/20`}
              key={index}
              style={{ width: `${size.width}px`, height: `${size.height}px` }}
            >
              <p className="mt-4 text-center text-4xl text-gray-900/60 dark:text-purple-200/30">{size.text}</p>
              <p className="mb-6 text-center text-4xl text-gray-900/60 dark:text-purple-200/30">{size.text2}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

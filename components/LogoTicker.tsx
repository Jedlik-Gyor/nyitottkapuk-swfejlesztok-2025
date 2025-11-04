"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import angular from "@/public/images/angular.png";
import csharp from "@/public/images/csharp.png";
import mongodb from "@/public/images/mongodb.png";
import nextjs from "@/public/images/nextjs.png";
import python from "@/public/images/python.png";
import reactjs from "@/public/images/reactjs.png";
import typescript from "@/public/images/typescript.png";
import mysql from "@/public/images/mysql.png";

const images = [
  { src: nextjs, alt: "Next.js" },
  { src: reactjs, alt: "React.js" },
  { src: typescript, alt: "TypeScript" },
  { src: csharp, alt: "CSharp" },
  { src: python, alt: "Python" },
  { src: mysql, alt: "MySQL" },
  { src: mongodb, alt: "MongoDB" },
  { src: nextjs, alt: "Next.js" },
  { src: reactjs, alt: "React.js" },
  { src: angular, alt: "Angular" },
  { src: typescript, alt: "TypeScript" },
  { src: csharp, alt: "CSharp" },
  { src: python, alt: "Python" },
  { src: mysql, alt: "MySQL" },
  { src: mongodb, alt: "MongoDB" },
  { src: nextjs, alt: "Next.js" },
  { src: reactjs, alt: "React.js" },
  { src: angular, alt: "Angular" },
  { src: typescript, alt: "TypeScript" },
  { src: csharp, alt: "CSharp" },
  { src: python, alt: "Python" },
  { src: mysql, alt: "MySQL" },
  { src: mongodb, alt: "MongoDB" },
  { src: nextjs, alt: "Next.js" },
  { src: reactjs, alt: "React.js" },
  { src: angular, alt: "Angular" },
  { src: typescript, alt: "TypeScript" },
  { src: csharp, alt: "CSharp" },
  { src: python, alt: "Python" },
  { src: mysql, alt: "MySQL" },
  { src: mongodb, alt: "MongoDB" },
];

export default function LogoAnimation() {
  return (
    <div className="glass my-24 skew-y-3 bg-purple-300/10 py-8 opacity-80">
      <div className="container mx-auto">
        <div className="overflow-hidden mask-[linear-gradient(to_right,transparent,black_25%,black_75%,transparent)]">
          <motion.div
            animate={{
              translateX: "-50%",
            }}
            className="flex flex-none gap-14 pr-14"
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {images.map((image, index) =>
              image.src ? (
                <Image alt={image.alt} height={30} key={index} src={image.src} />
              ) : (
                <div
                  className="flex h-8 w-24 items-center justify-center bg-gray-300 text-gray-600"
                  key={index}
                >
                  LOGO
                </div>
              ),
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

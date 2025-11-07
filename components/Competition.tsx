"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import profilepic from "@/public/images/dremak.jpg";

const Competition = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div
      className="container mx-auto px-4 py-20 text-gray-800/60 dark:text-white"
      id="competitions"
    >
      <h2 className="mb-16 text-center text-6xl font-bold">
        Verseny<span className="text-blue-500/60 dark:text-purple-300/60">eredmények</span>
      </h2>

      <div>
        <Image
          alt="profile picture"
          className="z-20 mx-auto w-[670px] rounded-full"
          src={profilepic}
        />

        <h2 className="relative -top-[200px] mb-4 text-center text-5xl font-bold text-blue-500/60 dark:text-purple-300/90">
          Dremák Olivér
        </h2>
        <h3 className="relative -top-[200px] text-center text-4xl">
          Országos Szakmai Tanulmányi Verseny 2. helyezés
        </h3>
      </div>
    </div>
  );
};

export default Competition;

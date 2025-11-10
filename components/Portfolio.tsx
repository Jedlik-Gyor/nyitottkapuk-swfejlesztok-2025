"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import proj1 from "@/public/images/proj1.png";
import proj2 from "@/public/images/proj2.png";
import proj3 from "@/public/images/proj3.png";

type Project = {
  title: string;
  desc: string;
  devstack: string;
  link: string;
  git: string;
  src: StaticImageData | string;
  type: "fullstack" | "frontend";
};

const projects: Project[] = [
  {
    title: "Éttermi rendeléskezelő alkalmazás",
    desc: "A Inner Peace Restaurant egy vendégek és az étterem dolgozói közötti rendszer. A vendégek az alkalmazáson keresztül leadhatják rendeléseiket, amelyeket az étterem dolgozói valós időben láthatnak és kezelhetnek. Az alkalmazás célja a rendelési folyamat egyszerűsítése és a vendégélmény javítása.",
    devstack: "MySql, Nuxt.js, Laravel, MAUI, Docker, Figma",
    link: "https://innerpeace.jedlik.cloud/innerpeace/hu/fooldal",
    git: "#",
    src: proj1,
    type: "fullstack",
  },
  {
    title: "Digitális konyhai asszisztens",
    desc: "A Digitális konyhai asszisztens egy olyan alkalmazás, amely segíti a felhasználókat a főzés során. Az alkalmazás receptajánlásokat, bevásárlólistákat és főzési időzítőket kínál, hogy a felhasználók könnyedén elkészíthessék kedvenc ételeiket.",
    devstack: "Mysql, Vue.js, ASP.NET Core",
    link: "#",
    git: "#",
    src: proj2,
    type: "fullstack",
  },
  {
    title: "MoveYourBody fittness alkalmazás",
    desc: "A MoveYourBody egy fitnesz alkalmazás, amely személyre szabott edzésterveket és táplálkozási tanácsokat kínál a felhasználók számára. Az alkalmazás célja, hogy segítsen az embereknek egészségesebb életmódot kialakítani és fenntartani.",
    devstack: "ASP.NET, Angular, TypeScript, SCSS, Cypress",
    link: "https://moveyourbody.jedlik.cloud",
    git: "#",
    src: "https://www.youtube.com/watch?v=AAVxq0WvIJU",
    type: "fullstack",
  },
];

const Portfolio = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-20 text-gray-900 dark:text-white" id="portfolio">
      <h2 className="mb-16 text-center text-6xl font-bold">
        Tavalyi <span className="text-blue-500 dark:text-purple-300/60">záródolgozatok</span>
      </h2>

      <div>
        {projects.map((project, index) => (
          <motion.div
            className="shadow-lg transition-shadow duration-300 hover:shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            key={index}
            layout
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <motion.div
              className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-gray-100 p-6 dark:border-white/10 dark:bg-black/20"
              layout="position"
              onClick={() => toggleExpand(index)}
            >
              <h3 className="text-4xl font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-light text-blue-500/60 dark:text-purple-300/60">
                  0{index + 1}
                </span>
              </div>
            </motion.div>

            <AnimatePresence initial={false}>
              {expandedIndex === index && (
                <motion.div
                  animate={{
                    opacity: 1,
                    height: "auto",
                    transition: {
                      height: {
                        duration: 0.4,
                        ease: "easeInOut",
                      },
                      opacity: {
                        duration: 3,
                        delay: 0.1,
                      },
                    },
                  }}
                  className="bg-gray-100 p-6 dark:bg-black/20"
                  exit={{
                    opacity: 0,
                    height: 0,
                    transition: {
                      height: {
                        duration: 0.4,
                        ease: "easeInOut",
                      },
                      opacity: {
                        duration: 0.1,
                      },
                    },
                  }}
                  initial={{ opacity: 0, height: 0 }}
                  layout
                >
                  <motion.div
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.3,
                        delay: 0.2,
                      },
                    }}
                    className="flex flex-col justify-between md:flex-row"
                    initial={{ opacity: 0, y: 10 }}
                  >
                    <div className="max-w-xl flex-1 space-y-4 p-6">
                      <p className="text-lg md:text-xl text-gray-800 dark:text-white/70">{project.desc}</p>
                      <p className="font-medium text-blue-500 dark:text-purple-300">
                        {project.devstack}
                      </p>
                      <p className="font-medium text-blue-500/70 capitalize dark:text-purple-300/70">
                        {project.type}
                      </p>
                      <div className="flex justify-start space-x-4">
                        <Link
                          className="text-blue-600 hover:opacity-60 dark:text-purple-400"
                          href={project.link}
                        >
                          <FaLink />
                        </Link>
                        <Link
                          className="text-blue-600 hover:opacity-60 dark:text-purple-400"
                          href={project.git}
                        >
                          <FaGithub />
                        </Link>
                      </div>
                    </div>
                    {typeof project.src === "string" ? (
                      <iframe
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="h-64 w-full rounded-lg md:w-1/2"
                        src={project.src.replace("watch?v=", "embed/")}
                        title={project.title}
                      />
                    ) : (
                      <Image
                        alt={project.title}
                        className="h-64 w-full rounded-lg object-cover md:w-1/2"
                        src={project.src}
                      />
                    )}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

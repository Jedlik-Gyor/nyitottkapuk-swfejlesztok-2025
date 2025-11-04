"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import proj1 from "@/public/images/proj5.png";
import proj2 from "@/public/images/proj8.png";
import proj3 from "@/public/images/proj11.png";

type Project = {
  title: string;
  desc: string;
  devstack: string;
  link: string;
  git: string;
  src: StaticImageData;
  type: "fullstack" | "frontend";
};

const projects: Project[] = [
  {
    title: "Ecommerce Digital Products",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    devstack: "MongoDB, Express, React, Node.js",
    link: "#",
    git: "#",
    src: proj1,
    type: "fullstack",
  },
  {
    title: "Interactive E-Learning Platform",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    devstack: "NextJs",
    link: "#",
    git: "#",
    src: proj2,
    type: "frontend",
  },
  {
    title: "Portfolio Website",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    devstack: "React, Tailwind",
    link: "#",
    git: "#",
    src: proj3,
    type: "frontend",
  },
];

const Portfolio = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-52 text-white" id="portfolio">
      <h2 className="mb-16 text-center text-6xl font-bold">
        Selected <span className="text-purple-300/60">Projects</span>
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
              className="flex cursor-pointer items-center justify-between rounded-lg border border-white/10 bg-black/20 p-6"
              layout="position"
              onClick={() => toggleExpand(index)}
            >
              <h3 className="text-4xl font-semibold">{project.title}</h3>
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-light text-purple-300/60">0{index + 1}</span>
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
                  className="bg-black/20 p-6"
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
                      <p className="text-white/70">{project.desc}</p>
                      <p className="font-medium text-purple-300">{project.devstack}</p>
                      <p className="font-medium text-purple-300/70 capitalize">{project.type}</p>
                      <div className="flex justify-start space-x-4">
                        <Link className="text-purple-400 hover:opacity-60" href={project.link}>
                          <FaLink />
                        </Link>
                        <Link className="text-purple-400 hover:opacity-60" href={project.git}>
                          <FaGithub />
                        </Link>
                      </div>
                    </div>
                    <Image
                      alt={project.title}
                      className="h-64 w-full rounded-lg object-cover md:w-1/2"
                      src={project.src}
                    />
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

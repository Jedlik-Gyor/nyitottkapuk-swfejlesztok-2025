"use client";

import { motion, useInView } from "framer-motion";
import React from "react";

type Metric = {
  id: number;
  value: string;
  label: string;
  description: string[];
};

const metrics: Metric[] = [
  {
    id: 1,
    value: "5+",
    label: "Fejlesztési terület",
    description: ["asztali", "mobil", "front-end", "back-end", "tesztelés"],
  },
  {
    id: 2,
    value: "100%",
    label: "Minőségbiztosítás",
    description: [
      "csoportmunka",
      "verziókövetés",
      "tiszta kód",
      "kódellenőrzés",
      "automatizált tesztek",
      "tervezési minták",
    ],
  },
  {
    id: 3,
    value: "10+",
    label: "Technológiák",
    description: [
      
      "Docker, Kubernetes",
      "Git, GitHub",
      "REST API",
      "VS Code, Visual Studio",
      "Copilot, ChatGPT",
      "Cypress, Selenium",
      "SQL, NoSQL",
    ],
  },
  {
    id: 4,
    value: "5+",
    label: "Programozási nyelvek",
    description: ["Python", "C#", "JavaScript", "TypeScript", "PHP"],
  },
  {
    id: 5,
    value: "CI/CD",
    label: "Fejlesztési folyamat",
    description: ["folyamatos integráció", "automatizált build", "tesztelés", "telepítés"],
  },
];

export default function KeyMetrics() {
  const ref = React.useRef<HTMLElement>(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      animate={isInView ? "visible" : "hidden"}
      className="container mx-auto px-4 py-32 text-white"
      id="about"
      initial="hidden"
      ref={ref}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2 },
        },
      }}
    >
      <motion.h2 variants={fadeInUp}>
        <p className="text-center text-4xl md:text-6xl font-bold text-gray-800/30 dark:text-purple-300/80">
          Mihez ért egy végzett Jedlikes?
        </p>
      </motion.h2>

      <div className="mt-6 flex flex-col items-stretch space-y-12 overflow-x-auto rounded-2xl bg-white/5 p-8 backdrop-blur-sm md:flex-row md:space-y-0">
        {metrics.map((metric, index) => (
          <motion.div
            className={`flex min-w-[200px] flex-1 flex-col items-center justify-center px-8 text-center ${index !== metrics.length - 1 ? "border-purple-300/20 pb-6 max-sm:border-b md:border-r md:pb-0" : ""}`}
            key={index}
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="mb-4 text-3xl md:text-5xl font-bold text-blue-500/60 dark:text-purple-300/60">
              {metric.value}
            </h3>
            <p className="mb-2 text-2xl text-black dark:text-white">{metric.label}</p>
            <ul className="list-inside list-disc text-left text-lg md:text-xl text-gray-800 dark:text-gray-400 leading-relaxed">
              {metric.description.map((desc, descIndex) => (
              <li key={descIndex}>{desc}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

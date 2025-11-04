"use client";

import { motion, useInView } from "framer-motion";
import React from "react";

type Metric = {
  id: number;
  value: string;
  label: string;
  description: string;
};

const metrics: Metric[] = [
  {
    id: 1,
    value: "5+",
    label: "Fejlesztési terület",
    description: "Tapasztalatot szereztem asztali, mobil, front-end, back-end és tesztautomatizálás területeken.",
  },
  {
    id: 2,
    value: "100%",
    label: "Minőségbiztosítás",
    description: "A kódot rendszeres teszteléssel és verziókövetéssel tartom naprakészen.",
  },
  {
    id: 3,
    value: "10+",
    label: "Használt technológia",
    description: "Ismerem a modern fejlesztői technológiákat és eszközöket.",
  },
  {
    id: 4,
    value: "5+",
    label: "Programozás",
    description: "Elsajátítottam a Python, C#, JavaScript, TypeScript, PHP, SQL, NoSQL nyelveket.",
  },
  {
    id: 5,
    value: "CI/CD",
    label: "Fejlesztési folyamat",
    description: "Automatizált build, tesztelés és telepítés a hatékony fejlesztésért.",
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
        <p className="text-center text-6xl font-bold text-gray-800/30 dark:text-purple-300/10 md:text-8xl">RÓLAM</p>
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
            <h3 className="mb-4 text-5xl font-bold text-blue-500/60 dark:text-purple-300/40">{metric.value}</h3>
            <p className="mb-2 text-lg text-black dark:text-white">{metric.label}</p>
            <p className="text-sm text-gray-800 dark:text-gray-400">{metric.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

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
    description:
      "<ul><li>- asztali</li><li>- mobil</li><li>- front-end</li>" +
      "<li>- back-end</li><li>- tesztelés</li></ul>",
  },
  {
    id: 2,
    value: "100%",
    label: "Minőségbiztosítás",
    description:
      "<ul><li>- csoportmunka</li><li>- verziókövetés</li><li>- tiszta kód</li><li>- kódellenőrzés</li><li>- automatizált tesztek</li><li>- tervezési minták</li></ul>",
  },
  {
    id: 3,
    value: "10+",
    label: "Használt technológia",
    description:
      "Modern fejlesztői technológiák és eszközök." +
      "<ul><li>- Docker, Kubernetes</li><li>- Git, GitHub</li><li>- REST API</li><li>- VS Code, Visual Studio</li><li>- Copilot, ChatGPT, Gemini</li><li>- Cypress, Selenium</li><li>- SQL, NoSQL</li></ul>",
  },
  {
    id: 4,
    value: "5+",
    label: "Programozási nyelvek",
    description:
      "<ul><li>- Python</li><li>- C#</li><li>- JavaScript</li><li>- TypeScript</li><li>- PHP</li></ul>",
  },
  {
    id: 5,
    value: "CI/CD",
    label: "Fejlesztési folyamat",
    description:
      "<ul><li>- folyamatos integráció</li><li>- automatizált build</li><li>- tesztelés</li><li>- telepítés</li></ul>",
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
        <p className="text-center text-6xl font-bold text-gray-800/30 md:text-8xl dark:text-purple-300/80">
          Mihez ért egy Jedlikes?
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
            <h3 className="mb-4 text-5xl font-bold text-blue-500/60 dark:text-purple-300/60">
              {metric.value}
            </h3>
            <p className="mb-2 text-2xl text-black dark:text-white">{metric.label}</p>
            <p
              className="text-sm text-gray-800 dark:text-gray-400"
              dangerouslySetInnerHTML={{ __html: metric.description }}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

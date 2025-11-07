"use client";

import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Full-Stack webfejlesztés",
    description:
      "Robusztus, skálázható webalkalmazások építése a front-endtől a back-endig.<br />Tanítjuk többek között <b style='color: pink'>HTML</b>, <b style='color: pink'>CSS</b>, <b style='color: pink'>JavaScript</b>, valamint modern keretrendszerek (<b style='color: pink'>Laravel</b>, <b style='color: pink'>Node.js</b>, <b style='color: pink'>React</b>, <b style='color: pink'>Angular</b>) és könyvtárak használatát.",
  },
  {
    id: "02",
    title: "Asztali és -mobilalkalmazás fejlesztés",
    description:
      "Asztali és mobilalkalmazások tervezése és fejlesztése.<br /> <b style='color: pink'>C#</b> nyelven konzolos, <b style='color: pink'>WPF</b> segítségével windowsos asztali alkalmazásokat, míg Visual Studió és <b style='color: pink'>.NET MAUI</b> segítségével mobil alkalmazások létrehozását tanulják meg a tanulók.",
  },
  {
    id: "03",
    title: "Adatbázis-tervezés és -kezelés",
    description:
      "Hatékony adatbázis-struktúrák kialakítása és az adatáramlás kezelése az optimális teljesítmény és az adatintegritás biztosítása érdekében.<br /> Tanítunk <b style='color: pink'>SQL</b> és <b style='color: pink'>NoSQL</b> adatbázisokat is.",
  },
  {
    id: "04",
    title: "DevOps és CI/CD",
    description:
      "Folyamatos integrációs és telepítési folyamatok megvalósítása a fejlesztési folyamatok egyszerűsítése és a kódminőség javítása érdekében.<br />A tanulók megismerkednek az automatizált build, tesztelés és telepítés eszközeivel.",
  },
  {
    id: "05",
    title: "AI Technológiák",
    description:
      "Fejlett mesterséges intelligencia-megoldások alkalmazása a szoftverfejlesztésben.<br />A tanulók megismerkednek az AI alapjaival, valamint a gépi tanulás és a természetes nyelvfeldolgozás gyakorlati alkalmazásaival.",
  },
];

const Services = () => {
  return (
    <div className="container mx-auto overflow-x-clip py-20" id="services">
      <h2 className="mb-20 text-center text-6xl font-bold text-gray-800/60 dark:text-white">
        Szakmai <span className="text-blue-500 dark:text-purple-300/60">képzés</span>
      </h2>

      <div className="space-y-6 px-4">
        {services.map((service, index) => (
          <motion.div
            className="flex flex-col border-b border-purple-300/20 pb-8"
            initial={{
              x: index % 2 === 0 ? -100 : 100,
              opacity: 0,
            }}
            key={index}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
          >
            <div className="mb-4 flex items-center gap-6">
              <p className="text-4xl font-bold text-blue-500 opacity-50 dark:text-purple-300">
                {service.id}
              </p>
              <p className="text-2xl font-bold dark:text-white/80">{service.title}</p>
            </div>
            <p className="pl-20 leading-relaxed text-gray-800 dark:text-gray-400">
              <span dangerouslySetInnerHTML={{ __html: service.description }} />
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;

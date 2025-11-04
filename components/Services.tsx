"use client";

import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Full-Stack webfejlesztés",
    description:
      "Robusztus, skálázható webalkalmazások építése a front-endtől a back-endig, a zökkenőmentes funkcionalitás és felhasználói élmény biztosítása érdekében.",
  },
  {
    id: "02",
    title: "API fejlesztés",
    description:
      "RESTful API-k tervezése és megvalósítása a különböző szoftverrendszerek és szolgáltatások közötti hatékony kommunikáció elősegítésére.",
  },
  {
    id: "03",
    title: "Adatbázis-tervezés és -kezelés",
    description:
      "Hatékony adatbázis-struktúrák kialakítása és az adatáramlás kezelése az optimális teljesítmény és az adatintegritás biztosítása érdekében.",
  },
  {
    id: "04",
    title: "Felhőintegráció",
    description:
      "Felhőalapú technológiák alkalmazása az alkalmazások telepítésére, méretezésére és kezelésére, a magas rendelkezésre állás és költséghatékonyság biztosítása érdekében.",
  },
  {
    id: "05",
    title: "DevOps és CI/CD",
    description:
      "Folyamatos integrációs és telepítési folyamatok megvalósítása a fejlesztési folyamatok egyszerűsítése és a kódminőség javítása érdekében.",
  },
  {
    id: "06",
    title: "AI Technológiák",
    description:
      "Fejlett mesterséges intelligencia-megoldások alkalmazása az adatelemzés, automatizálás és döntéstámogatás területén a hatékonyság, pontosság és felhasználói élmény javítása érdekében.",
  },
];

const Services = () => {
  return (
    <div className="container mx-auto overflow-x-clip py-20" id="services">
      <h2 className="mb-20 text-center text-6xl font-bold text-white">
        My <span className="text-purple-300/60">Services</span>
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
              <p className="text-4xl font-bold text-purple-300 opacity-50">{service.id}</p>
              <p className="text-2xl font-bold text-white/80">{service.title}</p>
            </div>
            <p className="pl-20 leading-relaxed text-gray-400">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;

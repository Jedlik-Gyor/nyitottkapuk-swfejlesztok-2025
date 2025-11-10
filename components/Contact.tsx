"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      className="mx-auto max-w-[1200px] px-4 py-2"
      id="contact"
    >
      <motion.div
        className="grid gap-16 lg:grid-cols-2"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="space-y-12">
          <motion.h2
            className="text-center text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-300"
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            Maradjunk{" "}
            <span className="text-purple-600/80 dark:text-purple-300/60">
              kapcsolatban
            </span>
          </motion.h2>

          <motion.div
            className="glass space-y-8 rounded-2xl p-8 text-gray-800 dark:text-gray-200"
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="space-y-2">
              <p className="text-lg text-purple-600/80 dark:text-purple-300/60">
                Telefon
              </p>
              <a
                className="flex items-center gap-2 text-2xl font-semibold transition duration-300 hover:text-gray-600 dark:hover:text-gray-400"
                href="tel:+3696529480"
              >
                +36 (96) 529-480
                <span className="text-purple-600/80 dark:text-purple-300/60">
                  ↗
                </span>
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-lg text-purple-600/80 dark:text-purple-300/60">
                E-mail
              </p>
              <a
                className="flex items-center gap-2 text-3xl font-semibold transition duration-300 hover:text-gray-600 dark:hover:text-gray-400 lg:text-4xl"
                href="mailto:jedlik@jedlik.eu"
              >
                jedlik@jedlik.eu
                <span className="text-purple-600/80 dark:text-purple-300/60">
                  ↗
                </span>
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-lg text-purple-600/80 dark:text-purple-300/60">
                Cím
              </p>
              <address className="text-xl leading-relaxed not-italic">
                9021 Győr, Szent István út 7.
              </address>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="h-full min-h-[400px] w-full overflow-hidden rounded-2xl"
          initial={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <iframe
            allowFullScreen
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2699.329838557064!2d17.629329608992272!3d47.68221707685718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476bbffacc7d0121%3A0x3c21b0233aee52f!2sGy%C5%91ri%20Szakk%C3%A9pz%C3%A9si%20Centrum%20Jedlik%20%C3%81nyos%20G%C3%A9pipari%20%C3%A9s%20Informatikai%20Technikum%20%C3%A9s%20Koll%C3%A9gium!5e1!3m2!1shu!2shu!4v1761856858355!5m2!1shu!2shu"
            style={{ border: 0 }}
          ></iframe>  
        </motion.div>
      </motion.div>
    </section>
  );
}
"use client";

import Image from "next/image";
import profilepic from "@/public/images/dremak.jpg";

const Competition = () => {
  return (
    <div className="container mx-auto px-4 py-20 text-gray-900 dark:text-white" id="competitions">
      <h2 className="mb-16 text-center font-bold text-4xl md:text-6xl">
        Verseny
        <span className="text-blue-500 dark:text-purple-300/60">eredmények</span>
      </h2>

      <div className="relative mb-[100px] text-center md:mb-0">
        <Image
          alt="profile picture"
          className="z-20 mx-auto w-full max-w-[500px] rounded-full md:max-w-[670px]"
          src={profilepic}
        />

        <h2 className="relative -top-[100px] mb-4 text-center text-4xl md:text-5xl font-bold text-blue-500 md:-top-[180px] dark:text-purple-300/90">
          Dremák Olivér
        </h2>

        <h3 className="relative -top-2.5 text-center text-3xl md:text-4xl text-gray-800 md:-top-[50px] dark:text-gray-200">
          Országos Szakmai Tanulmányi Verseny 2. helyezés
        </h3>
      </div>
    </div>
  );
};

export default Competition;

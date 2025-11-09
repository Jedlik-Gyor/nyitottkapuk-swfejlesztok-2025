import {
  AiFillFacebook,
  AiFillHome,
  AiFillInstagram,
  AiFillTikTok,
  AiOutlineYoutube,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="relative mx-auto max-w-[1200px] px-4 py-8">
      <div className="relative z-10 mt-8 text-center">
        <p className="hidden font-bold text-black/50 md:block md:text-[6rem] lg:text-[3rem] dark:text-white/60">
          Győri SZC Jedlik Ányos Gépipari és Informatikai Technikum és Kollégium
        </p>
        <h1 className="relative mb-12 text-5xl font-bold text-black/50 md:hidden dark:text-white/60">
          Győri SZC Jedlik Ányos Gépipari és Informatikai Technikum és Kollégium
        </h1>
      </div>

      <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
        <div className="space-y-2">
          <h3 className="text-center font-bold text-gray-900 md:text-left dark:text-gray-200">
            Hasznos linkek
          </h3>
          <ul className="flex flex-row justify-center gap-6 text-gray-800 md:justify-start dark:text-gray-200">
            <li>
              <a
                className="hover:underline"
                href="https://jedlik.eu"
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiFillHome size={48} />
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-center font-bold text-gray-900 md:text-left dark:text-gray-200">
            Közösségi média
          </h3>
          <ul className="flex flex-row flex-wrap justify-center gap-6 text-gray-800 md:justify-start dark:text-gray-200">
            <li>
              <a
                href="https://www.facebook.com/jedlikanyostechnikum"
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiFillFacebook size={48} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/jedlikanyostechnikum/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiFillInstagram size={48} />
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@jedliktechnikum"
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiFillTikTok size={48} />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@jedlikanyostechnikum_9189/shorts"
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiOutlineYoutube size={48} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mt-12 flex items-center justify-center gap-10 text-gray-600 sm:justify-between dark:text-gray-400">
        <p>© {new Date().getFullYear()}. Minden jog fenntartva.</p>
      </div>
    </footer>
  );
}

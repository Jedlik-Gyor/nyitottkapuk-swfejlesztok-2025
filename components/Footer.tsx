import {
  AiFillFacebook,
  AiFillGithub,
  AiFillHome,
  AiFillInstagram,
  AiFillTikTok,
  AiOutlineX,
  AiOutlineYoutube,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="relative mx-auto max-w-[1200px] px-4 py-8">
      <div className="relative z-10 mt-8 text-center">
        <p className="hidden font-bold text-white/10 md:block md:text-[6rem] lg:text-[3rem]">
          Győri SZC Jedlik Ányos Gépipari és Informatikai Technikum és Kollégium
        </p>
        <h1 className="relative mb-12 text-6xl font-bold text-white/10 md:hidden">
          Győri SZC Jedlik Ányos Gépipari és Informatikai Technikum és Kollégium
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-8 text-gray-200 sm:grid-cols-2">
        <div className="space-y-2">
          <h3 className="font-bold">Hasznos linkek</h3>
          <ul>
            <li>
              <a
                className="hover:underline"
                href="https://jedlik.eu"
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiFillHome size={60} />
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="font-bold">Közösségi média</h3>
          <ul className="flex flex-row gap-6">
            <li>
              <a
                href="https://www.facebook.com/jedlikanyostechnikum"
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiFillFacebook size={60} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/jedlikanyostechnikum/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiFillInstagram size={60} />
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@jedliktechnikum"
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiFillTikTok size={60} />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@jedlikanyostechnikum_9189/shorts"
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiOutlineYoutube size={60} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mt-12 flex items-center justify-center gap-10 text-gray-400 sm:justify-between">
        <p>© {new Date().getFullYear()}. Minden jog fenntartva.</p>
      </div>
    </footer>
  );
}

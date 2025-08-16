"use client";
import satu from "@/public/assets/bg2.png";
import dua from "@/public/assets/bg3.png";
import tiga from "@/public/assets/bg4.png";
import empat from "@/public/assets/bg5.png";
import one from "@/public/assets/1.jpg";
import two from "@/public/assets/2.jpg";
import three from "@/public/assets/3.jpg";
import four from "@/public/assets/4.jpg";
import last from "@/public/assets/5.jpg";
import p1 from "@/public/assets/p1.jpg";
import p2 from "@/public/assets/p2.jpg";
import p3 from "@/public/assets/p3.jpg";
import lg from "@/public/assets/logo.jpg";
import pp from "@/public/assets/logo.png";
import { Icon } from "@iconify/react";

const Card = ({ title, desc, icn }) => {
  return (
    <div className="p-4 border-[3px] border-[white] neon-shadow rounded-lg bg-gray-900 bg-opacity-80 hover:scale-110 duration-300">
      <img className="w-40 rounded-lg" src={icn} />
      <h2 className="mt-1 text-xl text-white">{title}</h2>
      <p className="text-sm text-white">{desc}</p>
    </div>
  );
};

const Project = ({ title, desc, image, link }) => {
  return (
    <div className="p-4 border-[3px] border-[white] neon-shadow rounded-lg bg-gray-900 bg-opacity-80">
      <img
        className="w-80 rounded-lg hover:scale-105 duration-300 border-2 border-white"
        src={image}
      />
      <h2 className="mt-1 text-xl text-white">{title}</h2>
      <p className="text-sm max-w-80 text-justify text-white">{desc}</p>
      <a
        href={link}
        className="mt-1 inline-block text-[#0ff] hover:scale-110 duration-300"
      >
        <button className="border-2 border-[#0ff] rounded-lg px-2 py-1">
          View Project
        </button>
      </a>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <div id="home" className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute w-full h-full object-cover"
          src="assets/bg.mp4"
          autoPlay
          loop
          muted
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="text-white font-bold text-center neon-glow">
            <h1 className="text-8xl">WELCOME TO</h1>
            <h2 className="text-4xl">MY PERSONAL WEBSITE</h2>
          </div>
        </div>
        <p className="text-xl absolute neon-glow text-white bottom-[3%] left-1/2 tranform -translate-x-1/2 -translate-y-1/2">
          restuanomw
        </p>
      </div>

      <div
        id="about"
        className="bg-cover h-screen"
        style={{ backgroundImage: `url(${tiga.src})` }}
      >
        <main className="container mx-auto px-4 py-32">
          <section className="flex flex-col-2 h-[60%] w-[80%] gap-4 mx-auto items-center p-8 bg-gray-900 bg-opacity-90 rounded-2xl hover:scale-110 duration-300 neon-shadow">
            <div className="p-10 text-center text-white">
              <img
                src={lg.src}
                width={600}
                className="rounded-full neon-shadow hover:scale-110 duration-300 border-4 border-white"
              />
            </div>
            <div className="text-lg text-white">
              <h2 className="text-4xl mb-2 neon-glow">About Me</h2>
              <div className="text-justify">
                <p>
                  Halo! Saya <b className="text-[#0ff]">Restu Anom Wardoyo</b>,
                  saya adalah seorang pelajar SMK N 1 Pabelan jurusan RPL. Saat
                  ini saya sedang mendalami keterampilan di bidang{" "}
                  <b className="text-[#0ff]">desain grafis dan pemrogaman.</b>
                </p>
                <p className="mt-4">
                  Melalui pengalaman selama belajar di SMK N 1 Pabelan, saya
                  telah menyelesaikan beberapa project, seperti{" "}
                  <b className="text-[#0ff]">
                    desain poster, desain postingan ig, mmt, x-banner, banner,
                    comic karya siswa & siswi SMK N 1 Pabelan, dan website
                    sederhana.
                  </b>
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>

      <div
        id="skill"
        className="bg-cover h-screen"
        style={{ backgroundImage: `url(${satu.src})` }}
      >
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-4xl text-white neon-glow">My Skill</h1>
          <div className="grid grid-cols-5 gap-8 mt-8">
            <Card title="Html" desc="Structur Dasar Web" icn={one.src} />
            <Card title="Css" desc="Gaya Tampilan Web" icn={two.src} />
            <Card title="Next.js" desc="Framework React" icn={three.src} />
            <Card title="Tailwind" desc="CSS Framework" icn={four.src} />
            <Card title="Corel Draw" desc="Desain Vektor" icn={last.src} />
          </div>
        </div>
      </div>

      <div
        id="project"
        className="bg-cover h-screen"
        style={{ backgroundImage: `url(${dua.src})` }}
      >
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-4xl text-white neon-glow">My Project</h1>
          <div className="grid grid-cols-3 gap-8 mt-8">
            <Project
              title="Personal Website"
              desc="Project Personal Website ini merupakan situs pribadi yang saya buat untuk menampilkan profil dan portofolio saya."
              image={p1.src}
              link="https://github.com/Restu-bot/Personal-Website"
            />
            <Project
              title="Furni"
              desc="Furni menjadi bagian dari pembelajaran saya selama PKL, dimana saya mempelajari konsep dasar hingga lanjutan."
              image={p2.src}
              link="https://github.com/Restu-bot/Project-PKL"
            />
            <Project
              title="Design Graphic"
              desc="Melalui project ini, saya mempelajari dasar-dasar elemen desain seperti warna, tipografi, dan komposisi."
              image={p3.src}
              link="https://drive.google.com/drive/folders/1iy7xGc_H-6f8tJZqvqFJIAGnE1ytSW1s"
            />
          </div>
        </div>
      </div>

      <div
        id="contact"
        className="bg-cover h-screen"
        style={{ backgroundImage: `url(${empat.src})` }}
      >
        <div className="flex items-center justify-center gap-10">
          <div className="bg-gray-900 bg-opacity-80 neon-shadow rounded-lg p-5 mt-[12%] text-center border-4 border-white">
            <img
              src={pp.src}
              className="w-80 rounded-lg hover:scale-105 duration-300"
            />
          </div>
          <div className="bg-gray-900 bg-opacity-80 neon-shadow rounded-lg p-8 mt-[12%] text-center border-4 border-white">
            <h1 className="text-2xl neon-glow text-white mb-4">
              My Sosial Media
            </h1>
            <p className="text-white mb-6">Connect with me on social media:</p>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://www.instagram.com/_restuu6"
                  className="flex items-center justify-between px-4 py-2 bg-gray-900 border-2 border-[#0ff] text-white neon-glow rounded-lg hover:scale-110 duration-300"
                >
                  <span className="text-4xl">
                    <Icon icon="skill-icons:instagram" />
                  </span>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Restu-bot"
                  className="flex items-center justify-between px-4 py-2  bg-gray-900 border-2 border-[#0ff] text-white neon-glow rounded-lg hover:scale-110 duration-300"
                >
                  <span className="text-4xl">
                    <Icon icon="skill-icons:github-dark" />
                  </span>
                  <span>Git Hub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6282135468783"
                  className="flex items-center justify-between px-4 py-2  bg-gray-900 border-2 border-[#0ff] text-white neon-glow rounded-lg hover:scale-110 duration-300"
                >
                  <span className="text-4xl">
                    <Icon icon="logos:whatsapp-icon" />
                  </span>
                  <span>Whatsapp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

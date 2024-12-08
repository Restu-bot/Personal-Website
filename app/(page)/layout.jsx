"use client";
import { useState } from "react";
import Link from "next/link";
import lg from "@/public/assets/logo.png";

export default function Home({ children }) {
  const [Show, setShow] = useState("#home");
  const menu = [
    {
      name: "Home",
      path: "#home",
    },
    {
      name: "About Me",
      path: "#about",
    },
    {
      name: "My Skill",
      path: "#skill",
    },
    {
      name: "Project",
      path: "#project",
    },
    {
      name: "Contact Me",
      path: "#contact",
    },
  ];

  const nav = (idSection) => {
    setShow(idSection);
  };

  return (
    <section className="w-full min-h-screen">
      <div className="z-20 max-w-7xl w-full shadow-sm bg-gray-900 p-6 text-center fixed bg-opacity-80">
        <div className="flex justify-between px-14">
          <div className="flex gap-4 items-center">
            <img src={lg.src} width={34} />
          </div>
          <nav className="flex gap-4">
            {menu.map((el, idx) => {
              const active = Show == el.path;
              return (
                <Link
                  key={idx}
                  href={el.path}
                  onClick={() => nav(el.path)}
                  className={`${
                    active
                      ? "text-white neon-glow scale-125 duration-300"
                      : "text-white"
                  }`}
                >
                  {el.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {children}

      <footer className="container mx-auto px-40 flex justify-between items-center bg-green-800 rounded-t-[6rem]"></footer>
    </section>
  );
}

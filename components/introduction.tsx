
import { socialNetworks } from "@/data";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

const Introduction = () => {
  return (
    <div className="pt-10 flex flex-col min-h-screen">
      <main className="flex-grow px-16 py-20">
        <div className="py-5">
          <h1 className="w-full  text-3xl uppercase">Davat</h1>
          <h1 className="w-full text-7xl uppercase font-bold">Franco</h1>
          <h2 className="w-full text-2xl">Desarrollador Web</h2>
        </div>
        <div className="flex items-center justify-start gap-3">
          <Link
            className="px-3 py-1 transition-all border-2 cursor-pointer text-md w-fit rounded-2xl hover:shadow-xl hover:shadow-white/50"
            href={"/cv-franco.pdf"}
            target="_blank"
          >
            Resumen
          </Link>
          <Link
            className="px-3 py-1 transition-all border-2 cursor-pointer text-md w-fit rounded-2xl hover:shadow-xl hover:shadow-white/50"
            href={"/portfolio"}
          >
            Proyectos
          </Link>
        </div>
      </main>
      <footer className="flex justify-start px-16 py-4">
        {socialNetworks.map((social) => (
          <Link key={social.id} href={social.src} target="_blank">
            {social.logo}
          </Link>
        ))}
      </footer>
    </div>
  );
};

export default Introduction;

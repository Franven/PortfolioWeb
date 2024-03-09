"use client";
import { itemsNavbar } from "@/data";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const router = usePathname();
  return (
    <div className="fixed z-40 flex-col items-center justify-center w-full mt-auto h-max px-5 py-2 bg-black">
      <nav>
        <div className="flex items-start justify-start gap-5">
          {itemsNavbar.map((item) => (
            <div
              key={item.id}
              className={`transition duration-150 ${
                router === item.link && "text-cyan-600"
              }`}
            >
              <Link href={item.link}>{item.title}</Link>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

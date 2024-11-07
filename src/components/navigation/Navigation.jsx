"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navigation = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    const upDatePosition = () => {
      setHeader(window.scrollY);
    };
    window.addEventListener("scroll", upDatePosition);
    upDatePosition();
    return () => {
      window.removeEventListener("scroll", upDatePosition);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full py-3 border-b border-stone-900 duration-150 ease-linear ${
        header ? "bg-black" : " "
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
        <Link
          className="font-roboto-serif text-2xl italic font-medium text-slate-400"
          href="/"
        >
          MH.Munir
        </Link>
        <nav>
          <ul className="flex gap-4 items-center">
            <li>
              <Link
                className="font-roboto-serif text-lg font-normal p-5 text-white inline-block"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="font-roboto-serif text-lg font-normal p-5 text-white inline-block"
                href="/about-us"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="font-roboto-serif text-lg font-normal p-5 text-white inline-block"
                href="/portfolio"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="font-roboto-serif bg-slate-400 text-lg font-normal py-3 px-5 rounded-full text-black inline-block"
                href="/"
              >
                Get in touch
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;

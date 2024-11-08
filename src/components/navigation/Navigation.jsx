"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

const Navigation = () => {
  const [header, setHeader] = useState(false);
  const [isNav, setIsNav] = useState(false);

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
      className={`fixed top-0 left-0 z-50 w-full py-5 md:py-3 border-b border-stone-900 duration-150 ease-linear ${
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
        <nav
          className={`${
            isNav ? "block" : "-translate-x-full md:translate-x-0"
          } fixed w-full h-full p-5 top-0 left-0 md:w-auto md:h-auto md:relative bg-slate-900 md:bg-transparent md:p-0 duration-500`}
        >
          <button
            onClick={() => setIsNav(!isNav)}
            className="inline-block md:hidden absolute right-6 top-6"
          >
            <IoMdClose size={28} className="text-white" />
          </button>
          <ul className="md:flex gap-4 items-center">
            <li>
              <Link
                onClick={() => setIsNav(!isNav)}
                className="font-roboto-serif text-lg font-normal py-5 md:p-5 text-white block border-b border-slate-300 md:border-0"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsNav(!isNav)}
                className="font-roboto-serif text-lg font-normal py-5 md:p-5 text-white block border-b border-slate-300 md:border-0"
                href="/about-us"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsNav(!isNav)}
                className="font-roboto-serif text-lg font-normal py-5 md:p-5 text-white block border-b border-slate-300 md:border-0"
                href="/portfolio"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsNav(!isNav)}
                className="font-roboto-serif bg-slate-400 text-lg font-normal py-3 px-5 rounded-full text-black inline-block mt-5 md:mt-0"
                href="/"
              >
                Get in touch
              </Link>
            </li>
          </ul>
        </nav>
        <button
          onClick={() => setIsNav(!isNav)}
          className="inline-block md:hidden"
        >
          <HiMiniBars3BottomLeft size={28} className="text-white" />
        </button>
      </div>
    </header>
  );
};

export default Navigation;

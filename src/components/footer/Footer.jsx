"use client";
import Image from "next/image";
import { useState } from "react";
import Logo from "@/img/coxsit.png";
import Link from "next/link";
import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setEmail("");
  };
  return (
    <footer className="bg-black pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-wrap lg:flex-nowrap justify-between gap-10 pb-12">
          <div className="basis-full sm:basis-2/6">
            <Image
              className="w-56 h-auto mb-5"
              src={Logo}
              alt="Cox's IT Solution"
            />
            <article className="text-base text-white font-dm-sans">
              We’re a team of strategic creator and digital innovator, united
              focus in our pursuit of mastery and joyful.
            </article>
          </div>
          <nav className="basis-full sm:basis-1/6">
            <h3 className="text-white text-xl font-roboto-serif font-medium mb-5">
              Our link
            </h3>
            <ul>
              <li>
                <Link
                  className="text-white text-base font-dm-sans hover:text-gray-500 duration-300 mb-2 block"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-white text-base font-dm-sans hover:text-gray-500 duration-300 mb-2 block"
                  href="/"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-white text-base font-dm-sans hover:text-gray-500 duration-300 mb-2 block"
                  href=""
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  className="text-white text-base font-dm-sans hover:text-gray-500 duration-300 mb-2 block"
                  href=""
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </nav>
          <nav className="basis-full sm:basis-1/6">
            <h3 className="text-white text-xl font-roboto-serif font-medium mb-5">
              Contact Us
            </h3>
            <ul>
              <li>
                <a
                  className="text-white text-base font-dm-sans hover:text-gray-500 duration-300 mb-2 block"
                  href="tel:+4733378901"
                >
                  +00 867 895 654
                </a>
              </li>
              <li>
                <Link
                  className="text-white text-base font-dm-sans hover:text-gray-500 duration-300 mb-2 block"
                  href="mailto: name@email.com"
                >
                  name@email.com
                </Link>
              </li>
              <li>
                <address className="text-white text-base font-dm-sans hover:text-gray-500 duration-300 mb-2 block not-italic">
                  House No 523, Kalur dulan, Cox&apos;s Bazar
                </address>
              </li>
            </ul>
          </nav>
          <div className="basis-full md:basis-2/6 relative top-0 left-0">
            <h3 className="text-white text-xl font-roboto-serif font-medium mb-5">
              Subscribe
            </h3>
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="relative bg-white pr-1 rounded-2xl flex items-center justify-between mb-5"
              >
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  name="email"
                  className="w-full h-full py-2 px-5 rounded-xl"
                  type="email"
                  autoComplete="none"
                />
                <button
                  className=" bg-black text-white right-0 py-1 px-5 rounded-xl"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <p className="text-center bg-white p-2 text-black rounded-3xl mb-5">
                You&apos;ve successfully subscribed to our newsletter.
              </p>
            )}
            <ul className="flex items-center gap-4">
              <li>
                <Link
                  className="w-10 h-10 flex items-center justify-center bg-white rounded-full group hover:bg-black hover:border border-white duration-300"
                  href=""
                >
                  <FaFacebookF
                    size={18}
                    className="group-hover:text-white duration-300"
                  />
                </Link>
              </li>
              <li>
                <Link
                  className="w-10 h-10 flex items-center justify-center bg-white rounded-full group hover:bg-black hover:border border-white duration-300"
                  href=""
                >
                  <FaXTwitter
                    size={18}
                    className="group-hover:text-white duration-300"
                  />
                </Link>
              </li>
              <li>
                <Link
                  className="w-10 h-10 flex items-center justify-center bg-white rounded-full group hover:bg-black hover:border border-white duration-300"
                  href=""
                >
                  <FaInstagram
                    size={18}
                    className="group-hover:text-white duration-300"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-500 pt-12 text-center">
          <p className="text-white text-base font-roboto-serif font-extralight">
            Copyright&copy; by Munir Hossain
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

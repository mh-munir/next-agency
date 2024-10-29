"use client";
import Image from "next/image";
import HeroImg from "@/img/hero-img.png";
import Bp1 from "@/img/bp1.png";
import Bp2 from "@/img/bp2.png";
import Bp3 from "@/img/bp3.png";
import Bp4 from "@/img/bp4.png";
import AboutUs from "@/img/about-img.png";
import petarn from "@/img/petarn.png";
import Link from "next/link";
import { FaPenFancy, FaUserTie } from "react-icons/fa";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { FaRegGem } from "react-icons/fa6";
import { FiLayers, FiMove, FiCheckSquare } from "react-icons/fi";
import { CiBullhorn } from "react-icons/ci";
import { IoIosColorPalette } from "react-icons/io";
import CountUp from "react-countup";
import { TfiLightBulb } from "react-icons/tfi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import projectUs from "@/img/p1.png";
import projectUs2 from "@/img/p2.png";
import projectUs3 from "@/img/p3.png";
import projectUs4 from "@/img/p4.png";
import { BsArrowUpRightCircle } from "react-icons/bs";

export default function Home() {
  return (
    <main>
      <section className="w-full relative z-10 bg-black py-20">
        <div className="absolute w-full h-full bg-hero-bg top-0 left-0 -z-10"></div>
        <div className="absolute top-5 -left-2">
          <Image
            src={petarn}
            className="w-[180] h-[190] object-cover"
            alt="Petern"
          />
        </div>
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <div className="w-full md:max-w-[700px]">
              <h1 className="text-4xl xl:text-6xl font-roboto-serif text-white leading-normal mb-4">
                Ready to take your
                <span className="md:inline-block lg:block text-slate-400 leading-normal">
                  Business Growth
                </span>{" "}
                to the next level?
              </h1>
              <p className="text-lg text-white font-light font-dm-sans max-w-[500px] mb-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut
                massa libero egestas malesuada viverra gravida libero cursus
                nulla leo pulvinar.
              </p>
              <Link
                className="text-black font-dm-sans font-normal text-xl bg-white inline-block px-5 py-2 rounded-3xl mb-28"
                href="/"
              >
                <IoArrowForwardCircleSharp
                  size="24px"
                  className="inline-block mr-2"
                />
                Start your Free Trial
              </Link>

              <div>
                <h4 className="text-xl text-slate-400 font-medium font-roboto-serif mb-4">
                  Trusted by Leading Brands
                </h4>
                <ul className="flex items-center flex-wrap lg:flex-nowrap gap-5">
                  <li className="flex-1">
                    <Image
                      className="max-w-36"
                      src={Bp1}
                      priority="true"
                      alt="My patner brand name"
                    />
                  </li>
                  <li className="flex-1">
                    <Image
                      className="max-w-36"
                      src={Bp2}
                      priority="true"
                      alt="My patner brand name"
                    />
                  </li>
                  <li className="flex-1">
                    <Image
                      className="max-w-36"
                      src={Bp3}
                      priority="true"
                      alt="My patner brand name"
                    />
                  </li>
                  <li className="flex-1">
                    <Image
                      className="max-w-36"
                      src={Bp4}
                      priority={true}
                      alt="My patner brand name"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="p-8 border border-t-slate-600 border-r-slate-700 border-b-slate-800 border-l-slate-900 rounded-full">
              <div className="p-8 border border-t-slate-900 border-r-slate-800 border-b-slate-700 border-l-slate-600 rounded-full">
                <Image
                  className="w-full h-auto shadow-my-shadow rounded-full"
                  alt="Hero Image"
                  src={HeroImg}
                  priority={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-[750px] mx-auto text-center mb-14">
            <span className="font-semibold text-slate-400 text-2xl font-roboto-serif inline-block mb-6">
              Our Services
            </span>
            <h2 className="text-4xl leading-normal xl:text-6xl text-black font-semibold font-roboto-serif xl:leading-[1.3]">
              High-impact services for your business
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {/* Card 01 */}
            <div className="group bg-gray-100 rounded-2xl p-8 hover:bg-black duration-200">
              <span className="flex items-center justify-center bg-black w-20 h-20 rounded-full mb-10 group-hover:bg-white duration-200">
                <FaPenFancy
                  size="36px"
                  className="text-white group-hover:text-black duration-200"
                />
              </span>
              <h4 className="text-xl font-roboto-serif font-medium mb-3 group-hover:text-white duration-200">
                Content Marketing
              </h4>
              <article className="text-lg font-dm-sans font-light group-hover:text-white duration-200">
                Our team creates engaging and shareable content that resonates
                with your audience, drives organic traffic
              </article>
            </div>
            {/* Card 02 */}
            <div className="group bg-gray-100 rounded-2xl p-8 hover:bg-black duration-200">
              <span className="flex items-center justify-center bg-black w-20 h-20 rounded-full mb-10 group-hover:bg-white duration-200">
                <FiLayers
                  size="36px"
                  className="text-white group-hover:text-black duration-200"
                />
              </span>
              <h4 className="text-xl font-roboto-serif font-medium mb-3 group-hover:text-white duration-200">
                Graphic Design
              </h4>
              <article className="text-lg font-dm-sans font-light group-hover:text-white duration-200">
                Unlock the power of visual storytelling with our expert graphic
                design services tailored to elevate your brand and captivate.
              </article>
            </div>
            {/* Card 03 */}
            <div className="group bg-gray-100 rounded-2xl p-8 hover:bg-black duration-200">
              <span className="flex items-center justify-center bg-black w-20 h-20 rounded-full mb-10 group-hover:bg-white duration-200">
                <CiBullhorn
                  size="48px"
                  className="text-white group-hover:text-black duration-200"
                />
              </span>
              <h4 className="text-xl font-roboto-serif font-medium mb-3 group-hover:text-white duration-200">
                Digital Marketing
              </h4>
              <article className="text-lg font-dm-sans font-light group-hover:text-white duration-200">
                Elevate your brand online presence with our data-driven digital
                marketing strategies. From SEO and content marketing
              </article>
            </div>
            {/* Card 04 */}
            <div className="group bg-gray-100 rounded-2xl p-8 hover:bg-black duration-200">
              <span className="flex items-center justify-center bg-black w-20 h-20 rounded-full mb-10 group-hover:bg-white duration-200">
                <IoIosColorPalette
                  size="48px"
                  className="text-white group-hover:text-black duration-200"
                />
              </span>
              <h4 className="text-xl font-roboto-serif font-medium mb-3 group-hover:text-white duration-200">
                Web Design
              </h4>
              <article className="text-lg font-dm-sans font-light group-hover:text-white duration-200">
                We specialize in creating visually stunning, user-friendly
                websites that align with your brand identity and deliver an
                exceptional.
              </article>
            </div>
            {/* Card 05 */}
            <div className="group bg-gray-100 rounded-2xl p-8 hover:bg-black duration-200">
              <span className="flex items-center justify-center bg-black w-20 h-20 rounded-full mb-10 group-hover:bg-white duration-200">
                <FaUserTie
                  size="36px"
                  className="text-white group-hover:text-black duration-200"
                />
              </span>
              <h4 className="text-xl font-roboto-serif font-medium mb-3 group-hover:text-white duration-200">
                IT Consulting
              </h4>
              <article className="text-lg font-dm-sans font-light group-hover:text-white duration-200">
                IT consulting, or information technology consulting, refers to
                the practice of providing advisory and implementation services
              </article>
            </div>
            {/* Card 06 */}
            <div className="group bg-gray-100 rounded-2xl p-8 hover:bg-black duration-200">
              <span className="flex items-center justify-center bg-black w-20 h-20 rounded-full mb-10 group-hover:bg-white duration-200">
                <FaRegGem
                  size="36px"
                  className="text-white group-hover:text-black duration-200"
                />
              </span>
              <h4 className="text-xl font-roboto-serif font-medium mb-3 group-hover:text-white duration-200">
                Brand Identify
              </h4>
              <article className="text-lg font-dm-sans font-light group-hover:text-white duration-200">
                It involves creating a unique and recognizable identity that
                sets the brand apart from competitors and resonates with the
                target audience.
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-8">
          <div>
            <Image
              priority={true}
              className="w-full h-auto"
              src={AboutUs}
              alt="About Us"
            />
          </div>
          <div>
            <span className="font-semibold text-slate-400 text-2xl font-roboto-serif inline-block mb-5">
              About us
            </span>
            <h2 className="text-4xl leading-normal xl:text-6xl text-white font-semibold font-roboto-serif xl:leading-[1.3] mb-5">
              The core mission behind all our work
            </h2>
            <article className="text-lg font-dm-sans font-light text-white mb-5">
              Our team creates engaging and shareable content that resonates
              with your audience, drives organic traffic
            </article>
            <div className="grid grid-cols-2 gap-5 lg:grid-cols-3 mb-8">
              <div>
                <CountUp
                  className="text-white font-roboto-serif text-4xl mb-3 inline-block"
                  start={0}
                  end={100}
                  duration={2.75}
                  suffix="+"
                ></CountUp>
                <h4 className="text-white font-dm-sans text-base">
                  Our Clients
                </h4>
              </div>
              <div>
                <CountUp
                  className="text-white font-roboto-serif text-4xl mb-3 inline-block"
                  start={0}
                  end={1050}
                  duration={2.75}
                  suffix="+"
                ></CountUp>
                <h4 className="text-white font-dm-sans text-base">
                  Our Projects
                </h4>
              </div>
              <div>
                <CountUp
                  className="text-white font-roboto-serif text-4xl mb-3 inline-block"
                  start={0}
                  end={200}
                  duration={2.75}
                  suffix=" +"
                ></CountUp>
                <h4 className="text-white font-normal font-dm-sans text-base">
                  Pandding project
                </h4>
              </div>
            </div>
            <Link
              className="text-black font-dm-sans font-normal text-xl bg-white inline-block px-5 py-2 rounded-3xl"
              href="/"
            >
              <IoArrowForwardCircleSharp
                size="24px"
                className="inline-block mr-2"
              />
              Start your Free Trial
            </Link>
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-[750px] mx-auto text-center mb-24">
            <span className="font-semibold text-slate-400 text-2xl font-roboto-serif inline-block mb-6">
              Process
            </span>
            <h2 className="text-4xl leading-normal xl:text-6xl text-black font-semibold font-roboto-serif xl:leading-[1.3]">
              Process that moves things forward
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10">
            {/* Card 01 */}
            <div className="p-8 border-4 border-gray-100 rounded-xl relative">
              <div className="flex items-center justify-center gap-4 mb-6 absolute -top-10  left-1/2 bg-white -translate-x-1/2 p-2">
                <span className="flex items-center justify-center bg-black w-16 h-16 rounded-full duration-200">
                  <TfiLightBulb
                    size="28px"
                    className="text-white duration-200"
                  />
                </span>
                <h4 className="text-xl font-roboto-serif font-medium duration-200">
                  Ideate
                </h4>
              </div>
              <article className="text-lg font-dm-sans font-light pt-5">
                The ideation process is a crucial phase in the design process
                where creative thinking and brainstorming
              </article>
            </div>
            {/* Card 02 */}
            <div className="p-8 border-4 border-gray-100 rounded-xl relative">
              <div className="flex items-center justify-center gap-4 mb-6 absolute -top-10  left-1/2 bg-white -translate-x-1/2 p-2">
                <span className="flex items-center justify-center bg-black w-16 h-16 rounded-full duration-200">
                  <HiOutlineEnvelope size="28px" className="text-white" />
                </span>
                <h4 className="text-xl font-roboto-serif font-medium">
                  Reserach
                </h4>
              </div>
              <article className="text-lg font-dm-sans font-light pt-5">
                Research is a critical component of the design process, helping
                designers understand the problem
              </article>
            </div>
            {/* Card 03 */}
            <div className="p-8 border-4 border-gray-100 rounded-xl relative">
              <div className="flex items-center justify-center gap-4 mb-6 absolute -top-10  left-1/2 bg-white -translate-x-1/2 p-2">
                <span className="flex items-center justify-center bg-black w-16 h-16 rounded-full">
                  <FiMove size="28px" className="text-white" />
                </span>
                <h4 className="text-xl font-roboto-serif font-medium">
                  Create
                </h4>
              </div>
              <article className="text-lg font-dm-sans font-light pt-5">
                Designing a process involves several key steps to ensure
                clarity, efficiency, successful implementation
              </article>
            </div>
            {/* Card 04 */}
            <div className="p-8 border-4 border-gray-100 rounded-xl relative">
              <div className="flex items-center justify-center gap-4 mb-6 absolute -top-10  left-1/2 bg-white -translate-x-1/2 p-2">
                <span className="flex items-center justify-center bg-black w-16 h-16 rounded-full duration-200">
                  <FiCheckSquare
                    size="28px"
                    className="text-white duration-200"
                  />
                </span>
                <h4 className="text-xl font-roboto-serif font-medium duration-200">
                  Testing
                </h4>
              </div>
              <article className="text-lg font-dm-sans font-light pt-5">
                Testing is a crucial phase in the design process to ensure that
                the product or system meets the specified requirements
              </article>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-[750px] mx-auto text-center mb-14">
            <h2 className="text-4xl leading-normal xl:text-6xl text-black font-semibold font-roboto-serif xl:leading-[1.3]">
              Recent Showcase
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-10 items-start">
            <div className="grid gap-10">
              {/* Project 01 */}
              <div className="group rounded-2xl relative">
                <Image
                  className="mb-5 w-full h-auto"
                  src={projectUs}
                  alt="Our Project"
                />
                <h4 className="text-xl font-roboto-serif font-medium">
                  Web UI design
                </h4>
                <p>Creative UI design</p>
                <Link
                  className="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:block z-10 duration-100"
                  href=""
                >
                  <BsArrowUpRightCircle size={28} className=" text-white" />
                </Link>
              </div>
              {/* Project 02 */}
              <div className="group rounded-2xl relative">
                <Image
                  className="mb-5 w-full h-auto"
                  src={projectUs2}
                  alt="Our Project"
                />
                <h4 className="text-xl font-roboto-serif font-medium">
                  Web UI design
                </h4>
                <p>Creative UI design</p>
                <Link
                  className="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:block z-10 duration-100"
                  href=""
                >
                  <BsArrowUpRightCircle size={28} className=" text-white" />
                </Link>
              </div>
            </div>
            <div className="grid gap-10">
              <div className="grid justify-end mt-10">
                <Link
                  className="text-white font-dm-sans font-normal text-xl bg-black inline-block px-5 py-2 rounded-3xl"
                  href="/"
                >
                  <IoArrowForwardCircleSharp
                    size="24px"
                    className="inline-block mr-2"
                  />
                  Start your Free Trial
                </Link>
              </div>
              {/* Project 03 */}
              <div className="group rounded-2xl relative">
                <Image
                  className="mb-5 w-full h-auto"
                  src={projectUs3}
                  alt="Our Project"
                />
                <h4 className="text-xl font-roboto-serif font-medium">
                  Web UI design
                </h4>
                <p>Creative UI design</p>
                <Link
                  className="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:block z-10 duration-100"
                  href=""
                >
                  <BsArrowUpRightCircle size={28} className=" text-white" />
                </Link>
              </div>
              {/* Project 04 */}
              <div className="group rounded-2xl relative">
                <Image
                  className="mb-5 w-full h-auto"
                  src={projectUs4}
                  alt="Our Project"
                />
                <h4 className="text-xl font-roboto-serif font-medium">
                  Web UI design
                </h4>
                <p>Creative UI design</p>
                <Link
                  className="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:block z-10 duration-100"
                  href=""
                >
                  <BsArrowUpRightCircle size={28} className=" text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-[750px] mx-auto text-center mb-14">
            <h2 className="text-4xl leading-normal xl:text-6xl text-black font-semibold font-roboto-serif xl:leading-[1.3]">
              Our clints feedback
            </h2>
          </div>
          <div></div>
        </div>
      </section>
    </main>
  );
}

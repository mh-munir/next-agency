import Image from "next/image";
import Link from "next/link";
import AboutUsImg from "@/img/about-us-page.png";
import ReviewImg from "@/img/review.png";
import Mission1 from "@/img/mission1.png";
import Mission2 from "@/img/mission2.png";
import Team1 from "@/img/t1.png";
import Team2 from "@/img/t2.png";
import Team3 from "@/img/t3.png";
import Team4 from "@/img/t4.png";
import Team5 from "@/img/t5.png";
import Team6 from "@/img/t6.png";
import TeamM1 from "@/img/tm1.png";
import TeamM2 from "@/img/tm2.png";
import TeamM3 from "@/img/tm3.png";
import { FaRegStar, FaRegStarHalf } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";

export const metadata = {
  title: "About Us",
  description: "Next JS Page build",
};

const AboutUs = () => {
  return (
    <main>
      <section className="bg-black pt-48 rounded-3xl">
        <div className="grid md:grid-cols-2 max-w-[1600px] ml-auto pl-5 items-center gap-10">
          <div className="pr-5 md:pr-0">
            <span className="text-lg text-white block font-dm-sans mb-5">
              Pleasure and so read the was hope.
            </span>
            <h1 className="text-4xl xl:text-6xl font-roboto-serif text-white leading-normal mb-4">
              Ready to take your
              <span className="md:inline-block lg:block text-slate-400 leading-normal">
                Business Growth
              </span>{" "}
              to the next level?
            </h1>
            <p className="text-lg text-white font-light font-dm-sans max-w-[500px] mb-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut
              massa libero egestas malesuada viverra gravida libero cursus nulla
              leo pulvinar.
            </p>
            <div className="flex items-center gap-5">
              <div className="w-20 h-20">
                <Image className="w-full h-full" src={ReviewImg} alt="Review" />
              </div>
              <div>
                <p className="text-white text-lg font-roboto-serif mb-2">
                  Rated 4.9/5 stars
                </p>
                <ul className="flex gap-1">
                  <li>
                    <FaRegStar size={20} className="text-white" />
                  </li>
                  <li>
                    <FaRegStar size={20} className="text-white" />
                  </li>
                  <li>
                    <FaRegStar size={20} className="text-white" />
                  </li>
                  <li>
                    <FaRegStar size={20} className="text-white" />
                  </li>
                  <li>
                    <FaRegStarHalf size={20} className="text-white" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <Image
              className="w-full h-auto relative -mb-[75px]"
              src={AboutUsImg}
              alt="Pleasure and so read the was hope. Ready to take your to the next level?"
            />
          </div>
        </div>
      </section>
      <section className="bg-white pt-48 pb-24">
        <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-3 gap-5">
          <div className="text-center">
            <span className="inline-block text-4xl text-black font-medium font-roboto-serif mb-4">
              200+
            </span>
            <h5 className="text-2xl font-medium mb-4">We&apos;re a family</h5>
            <p className="text-lg">
              Speedily say has suitable disposal add boy. On fourth doubt miles
              of child. Exercise joy man children rejoiced.
            </p>
          </div>
          <div className="text-center">
            <span className="inline-block text-4xl text-black font-medium font-roboto-serif mb-4">
              200+
            </span>
            <article>
              <h5 className="text-2xl font-medium mb-4">Graphic Design </h5>
              <p className="text-lg">
                Speedily say has suitable disposal add boy. On fourth doubt
                miles of child. Exercise joy man children rejoiced.
              </p>
            </article>
          </div>
          <div className="text-center">
            <span className="inline-block text-4xl text-black font-medium font-roboto-serif mb-4">
              200+
            </span>
            <h5 className="text-2xl font-medium mb-4">Digital Marketing </h5>
            <p className="text-lg">
              Speedily say has suitable disposal add boy. On fourth doubt miles
              of child. Exercise joy man children rejoiced.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-[1fr_1.3fr] gap-10 items-center">
          <div>
            <span className="font-semibold text-slate-400 text-2xl font-roboto-serif inline-block mb-6">
              Our Mission
            </span>
            <h2 className="text-4xl xl:text-6xl font-roboto-serif text-white leading-normal mb-4">
              Boost your with your business.
            </h2>
            <p className="text-lg text-white font-light font-dm-sans max-w-[500px] mb-7">
              He moonlights difficult engrossed it, sportsmen. Interested has
              all Devonshire difficulty gay assistance joy.
            </p>
            <div>
              <ul className="grid md:grid-cols-2 items-start gap-x-5">
                <li className="flex items-start text-white text-lg gap-2 mb-4">
                  <span className="inline-block mt-1">
                    <IoIosCheckmarkCircle
                      size={18}
                      className="text-slate-400"
                    />
                  </span>
                  Moonlight newspaper up its enjoyment
                </li>
                <li className="flex items-start text-white text-lg gap-2 mb-4">
                  <span className="inline-block mt-1">
                    <IoIosCheckmarkCircle
                      size={18}
                      className="text-slate-400"
                    />
                  </span>
                  She new course gets living.
                </li>
                <li className="flex items-start text-white text-lg gap-2 mb-4">
                  <span className="inline-block mt-1">
                    <IoIosCheckmarkCircle
                      size={18}
                      className="text-slate-400"
                    />
                  </span>
                  She new course gets living.
                </li>
                <li className="flex items-start text-white text-lg gap-2 mb-4">
                  <span className="inline-block mt-1">
                    <IoIosCheckmarkCircle
                      size={18}
                      className="text-slate-400"
                    />
                  </span>
                  Rooms oh fully taken by worse.
                </li>
                <li className="flex items-start text-white text-lg gap-2 mb-4">
                  <span className="inline-block mt-1">
                    <IoIosCheckmarkCircle
                      size={18}
                      className="text-slate-400"
                    />
                  </span>
                  Perceived end certainly day.
                </li>
                <li className="flex items-start text-white text-lg gap-2 mb-4">
                  <span className="inline-block mt-1">
                    <IoIosCheckmarkCircle
                      size={18}
                      className="text-slate-400"
                    />
                  </span>
                  Preference any astonished unreserved Mrs.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="flex items-start mb-5">
              <Image
                className="max-w-[326px] h-auto"
                src={Mission1}
                alt="Our Mission"
              />
              <div className="bg-white relative -ml-48 sm:-ml-10 p-4 rounded-lg mt-16 shadow-sm shadow-white">
                <span className="text-black text-lg font-dm-sans mb-2 block">
                  Team memember
                </span>
                <ul className="flex">
                  <li className="flex-1 w-10 h-10">
                    <Image
                      width={40}
                      height={40}
                      className="w-full h-full object-cover object-center"
                      src={Team1}
                      alt="Munir Hossain"
                    />
                  </li>
                  <li className="flex-1 w-10 h-10 -ml-3">
                    <Image
                      width={40}
                      height={40}
                      className="w-full h-full object-cover object-center"
                      src={Team2}
                      alt="Munir Hossain"
                    />
                  </li>
                  <li className="flex-1 w-10 h-10 -ml-3">
                    <Image
                      width={40}
                      height={40}
                      className="w-full h-full object-cover object-center"
                      src={Team3}
                      alt="Munir Hossain"
                    />
                  </li>
                  <li className="flex-1 w-10 h-10 -ml-3">
                    <Image
                      width={40}
                      height={40}
                      className="w-full h-full object-cover object-center"
                      src={Team4}
                      alt="Munir Hossain"
                    />
                  </li>
                  <li className="flex-1 w-10 h-10 -ml-3">
                    <Image
                      width={40}
                      height={40}
                      className="w-full h-full object-cover object-center"
                      src={Team5}
                      alt="Munir Hossain"
                    />
                  </li>
                  <li className="flex-1 w-10 h-10 -ml-3">
                    <Image
                      width={40}
                      height={40}
                      className="w-full h-full object-cover object-center"
                      src={Team6}
                      alt="Munir Hossain"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid md:grid-cols-2 items-center gap-10">
              <div className="flex gap-5 items-start">
                <div className="sm:flex-1 text-center p-4">
                  <span className="text-white text-4xl font-roboto-serif font-bold block">
                    10k
                  </span>
                  <p className="text-white text-base mt-3">
                    Great conversations per month
                  </p>
                </div>
                <div className="sm:flex-1 text-center border-l border-slate-300 p-4">
                  <span className="text-white text-4xl font-roboto-serif font-bold mt-16 block">
                    95+
                  </span>
                  <p className="text-white text-base mt-3">Project Complete</p>
                </div>
              </div>
              <Image
                className="max-w-[285px] h-auto md:ml-auto"
                src={Mission2}
                alt="Our Mission"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-10">
            <h2 className="text-4xl leading-normal xl:text-6xl text-black font-semibold font-roboto-serif xl:leading-[1.3]">
              Our Teams
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10 ">
            <div className="relative">
              <Image
                className="w-full h-auto"
                src={TeamM1}
                alt="Our Team Member"
              />
              <div className="mt-5">
                <h5 className="text-xl text-black font-roboto-serif font-medium mb-1">
                  Esther Howards
                </h5>
                <p className="text-base">Founder & CEO</p>
                <ul className="absolute top-5 right-5 flex gap-5">
                  <li>
                    <Link
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center"
                      href="/"
                    >
                      <FiFacebook size={16} className="text-black leading-4" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center"
                      href="/"
                    >
                      <FiInstagram
                        size={16}
                        className="text-black text-center leading-4"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center"
                      href="/"
                    >
                      <CiLinkedin
                        size={16}
                        className="text-black text-center leading-4"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <Image
                className="w-full h-auto"
                src={TeamM2}
                alt="Our Team Member"
              />
              <div className="mt-5">
                <h5 className="text-xl text-black font-roboto-serif font-medium mb-1">
                  Cameron Williamson
                </h5>
                <p className="text-base">Founder & CEO</p>
                <ul className="absolute top-5 right-5 flex gap-5">
                  <li>
                    <Link
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center"
                      href="/"
                    >
                      <FiFacebook size={16} className="text-black leading-4" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center"
                      href="/"
                    >
                      <FiInstagram
                        size={16}
                        className="text-black text-center leading-4"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center"
                      href="/"
                    >
                      <CiLinkedin
                        size={16}
                        className="text-black text-center leading-4"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <Image
                className="w-full h-auto"
                src={TeamM3}
                alt="Our Team Member"
              />
              <div className="mt-5">
                <h5 className="text-xl text-black font-roboto-serif font-medium mb-1">
                  Liam Cooper
                </h5>
                <p className="text-base">Founder & CEO</p>
                <ul className="absolute top-5 right-5 flex gap-5">
                  <li>
                    <Link
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center"
                      href="/"
                    >
                      <FiFacebook size={16} className="text-black leading-4" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center"
                      href="/"
                    >
                      <FiInstagram
                        size={16}
                        className="text-black text-center leading-4"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center"
                      href="/"
                    >
                      <CiLinkedin
                        size={16}
                        className="text-black text-center leading-4"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-24">
        <div className="max-w-5xl mx-auto px-5 bg-getin-bg bg-cover bg-no-repeat bg-center py-10 rounded-3xl text-center">
          <h2 className="text-4xl leading-normal xl:text-6xl text-white font-semibold font-roboto-serif xl:leading-[1.3] mb-4">
            Enough talk, let’s get to work
          </h2>
          <Link
            className="inline-block text-black bg-white font-dm-sans px-5 py-2 rounded-full"
            href="/contact"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;

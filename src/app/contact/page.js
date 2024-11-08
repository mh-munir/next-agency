import Link from "next/link";
import {
  PiEnvelopeSimpleThin,
  PiPhoneThin,
  PiMapPinLight,
} from "react-icons/pi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ContactUs from "@/components/contact-us/ContactUs";

export const metadata = {
  title: "Contact Us",
  description: "Next JS Page build",
};

const Contact = () => {
  return (
    <main className="min-h-72">
      <section className="bg-black pt-48 pb-28 rounded-3xl">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <h1 className="text-4xl xl:text-6xl font-bold font-roboto-serif text-white leading-normal mb-4">
            Contact Us
          </h1>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-4xl leading-normal xl:text-6xl text-black font-semibold font-roboto-serif xl:leading-[1.3]">
              Let’s talk
            </h2>
            <p className="mb-5 text-lg text-black max-w-96 border-b border-slate-300 pb-5">
              We collaborate with thousands of creators, entrepreneurs and
              complete legends.
            </p>
            <div className="max-w-96">
              <div className="flex items-center gap-2 pb-5">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-black">
                  <PiEnvelopeSimpleThin size={24} className="text-white" />
                </span>
                <div>
                  <h6 className="font-roboto-serif text-xl text-black font-medium">
                    Our email
                  </h6>
                  <Link
                    href="mailto:hello@example.com"
                    className="inline-block text-base text-black hover:text-blue-300"
                  >
                    hello@example.com
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-2 pb-5">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-black">
                  <PiPhoneThin size={24} className="text-white" />
                </span>
                <div>
                  <h6 className="font-roboto-serif text-xl text-black font-medium">
                    Call us
                  </h6>
                  <Link
                    href="tel:+88 01811914794"
                    className="inline-block text-base text-black hover:text-blue-300"
                  >
                    +123 456 7892
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-2 pb-5 border-b border-slate-300">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-black">
                  <PiMapPinLight size={24} className="text-white" />
                </span>
                <div>
                  <h6 className="font-roboto-serif text-xl text-black font-medium">
                    Find us
                  </h6>
                  <p className="inline-block text-base text-black hover:text-blue-300">
                    Open Google Maps
                  </p>
                </div>
              </div>
            </div>
            <ul className="flex items-center gap-4 mt-5">
              <li>
                <Link
                  className="w-10 h-10 flex items-center justify-center bg-white rounded-full  group border hover:bg-black border-black duration-300"
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
                  className="w-10 h-10 flex items-center justify-center bg-white rounded-full group border hover:bg-black border-black duration-300"
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
                  className="w-10 h-10 flex items-center justify-center bg-white rounded-full group border hover:bg-black border-black duration-300"
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
          <div className="bg-slate-100 p-10 rounded-3xl">
            <ContactUs />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;

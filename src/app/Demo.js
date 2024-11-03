import { FaPenFancy, FaUserTie } from "react-icons/fa";
import { FaRegGem } from "react-icons/fa6";
import { FiLayers } from "react-icons/fi";
import { CiBullhorn } from "react-icons/ci";
import { IoIosColorPalette } from "react-icons/io";
export const data = [
  {
    icon: (
      <FaPenFancy
        size="36px"
        className="text-white group-hover:text-black duration-200"
      />
    ),
    ServiceTitle: "Content Marketing",
    des: "Our team creates engaging and shareable content that resonates with your audience, drives organic traffic",
  },
  {
    icon: (
      <FiLayers
        size="36px"
        className="text-white group-hover:text-black duration-200"
      />
    ),
    ServiceTitle: "Graphic Design",
    des: "Unlock the power of visual storytelling with our expert graphic design services tailored to elevate your brand and captivate.",
  },
  {
    icon: (
      <CiBullhorn
        size="48px"
        className="text-white group-hover:text-black duration-200"
      />
    ),
    ServiceTitle: "Digital Marketing",
    des: "Elevate your brand online presence with our data-driven digital marketing strategies. From SEO and content marketing",
  },
  {
    icon: (
      <IoIosColorPalette
        size="48px"
        className="text-white group-hover:text-black duration-200"
      />
    ),
    ServiceTitle: "Web Design",
    des: "We specialize in creating visually stunning, user-friendly websites that align with your brand identity and deliver anexceptional.",
  },
  {
    icon: (
      <FaUserTie
        size="36px"
        className="text-white group-hover:text-black duration-200"
      />
    ),
    ServiceTitle: "IT Consulting",
    des: "IT consulting, or information technology consulting, refers to the practice of providing advisory and implementation services",
  },
  {
    icon: (
      <FaRegGem
        size="36px"
        className="text-white group-hover:text-black duration-200"
      />
    ),
    ServiceTitle: " Brand Identify",
    des: "It involves creating a unique and recognizable identity that sets the brand apart from competitors and resonates with the target audience.",
  },
];

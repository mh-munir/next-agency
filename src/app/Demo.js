import { FaPenFancy, FaUserTie } from "react-icons/fa";
import { FaRegGem } from "react-icons/fa6";
import { FiLayers } from "react-icons/fi";
import { CiBullhorn } from "react-icons/ci";
import { IoIosColorPalette } from "react-icons/io";
import ContentWriting from "@/img/Content.png";
import Webdesign from "@/img/Web-design.png";
import FrontEnd from "@/img/Front-end.png";
import WebDev from "@/img/web-development.png";
import Dmarketing from "@/img/Digital-marketing.png";
import Amarketing from "@/img/Affiliate-marketing.png";
export const data = [
  {
    sImage: ContentWriting,
    icon: (
      <FaPenFancy
        size="36px"
        className="text-white group-hover:text-black duration-200"
      />
    ),
    ServiceTitle: "Content Marketing",
    des: `Our team creates engaging and shareable content that resonates with your audience, drives organic traffic 
    Our team creates engaging and shareable content that resonates with your audience, drives organic traffic`,
  },
  {
    sImage: Webdesign,
    icon: (
      <FiLayers
        size="36px"
        className="text-white group-hover:text-black duration-200"
      />
    ),
    ServiceTitle: "Web Design",
    des: `Unlock the power of visual storytelling with our expert graphic design services tailored to elevate your brand and captivate. 
    Unlock the power of visual storytelling with our expert graphic design services tailored to elevate your brand and captivate.`,
  },
  {
    sImage: FrontEnd,
    icon: (
      <CiBullhorn
        size="48px"
        className="text-white group-hover:text-black duration-200"
      />
    ),
    ServiceTitle: "Front-End Development",
    des: `Elevate your brand online presence with our data-driven digital marketing strategies. From SEO and content marketing 
    Elevate your brand online presence with our data-driven digital marketing strategies. From SEO and content marketing`,
  },
  {
    sImage: WebDev,
    icon: (
      <IoIosColorPalette
        size="48px"
        className="text-white group-hover:text-black duration-200"
      />
    ),
    ServiceTitle: "Web Development",
    des: `We specialize in creating visually stunning, user-friendly websites that align with your brand identity and deliver anexceptional. 
    We specialize in creating visually stunning, user-friendly websites that align with your brand identity and deliver anexceptional.`,
  },
  {
    sImage: Dmarketing,
    icon: (
      <FaUserTie
        size="36px"
        className="text-white group-hover:text-black duration-200"
      />
    ),
    ServiceTitle: "Digital marketing",
    des: `IT consulting, or information technology consulting, refers to the practice of providing advisory and implementation services IT consulting, 
    or information technology consulting, refers to the practice of providing advisory and implementation services`,
  },
  {
    sImage: Amarketing,
    icon: (
      <FaRegGem
        size="36px"
        className="text-white group-hover:text-black duration-200"
      />
    ),
    ServiceTitle: "Affiliate marketing",
    des: `It involves creating a unique and recognizable identity that sets the brand apart from competitors and resonates with the target audience.
    It involves creating a unique and recognizable identity that sets the brand apart from competitors and resonates with the target audience.`,
  },
];

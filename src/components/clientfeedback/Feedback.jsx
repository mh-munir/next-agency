"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import Client1 from "@/img/c1.png";

const Feedback = () => {
  var settings = {
    dots: false,
    infinite: true,
    nav: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="text-center">
        <Image
          className="w-28 h-28 mx-auto object-cover mb-5 rounded-full"
          src={Client1}
          alt="Our Client Feedback"
        />
        <p className="text-xl font-dm-sans font-light italic mb-5">
          “Be genuine in your assessment, and provide constructive feedback to
          benefit both potential customers and the company providing the product
          or service.”
        </p>
        <h4 className="font-roboto-serif text-2xl font-semibold">
          Jacqueline Miller
        </h4>
        <span className="text-base capitalize">CEO Of An Eduport</span>
      </div>
      <div className="text-center">
        <Image
          className="w-28 h-28 mx-auto object-cover mb-5 rounded-full"
          src={Client1}
          alt="Our Client Feedback"
        />
        <p className="text-xl font-dm-sans font-light italic mb-5">
          “Be genuine in your assessment, and provide constructive feedback to
          benefit both potential customers and the company providing the product
          or service.”
        </p>
        <h4 className="font-roboto-serif text-2xl font-semibold">
          Jacqueline Miller
        </h4>
        <span className="text-base capitalize">CEO Of An Eduport</span>
      </div>
      <div className="text-center">
        <Image
          className="w-28 h-28 mx-auto object-cover mb-5 rounded-full"
          src={Client1}
          alt="Our Client Feedback"
        />
        <p className="text-xl font-dm-sans font-light italic mb-5">
          “Be genuine in your assessment, and provide constructive feedback to
          benefit both potential customers and the company providing the product
          or service.”
        </p>
        <h4 className="font-roboto-serif text-2xl font-semibold">
          Jacqueline Miller
        </h4>
        <span className="text-base capitalize">CEO Of An Eduport</span>
      </div>
    </Slider>
  );
};

export default Feedback;

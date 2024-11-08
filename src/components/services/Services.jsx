"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
const Services = (props) => {
  const [modal, setModal] = useState(false);
  const HandleParemeter = () => {
    setModal((prev) => !prev);
  };
  return (
    <div>
      <div
        onClick={HandleParemeter}
        className="group bg-gray-100 rounded-2xl p-8 hover:bg-black duration-200 cursor-pointer"
      >
        <Image className="hidden" src={props.ServiceImage} alt="Services" />
        <span className="flex items-center justify-center bg-black w-20 h-20 rounded-full mb-10 group-hover:bg-white duration-200">
          {props.icon}
        </span>
        <article>
          <h4 className="text-xl font-roboto-serif capitalize font-medium mb-3 group-hover:text-white duration-200">
            {props.ServiceTitle}
          </h4>
          <p className="text-lg font-dm-sans font-light group-hover:text-white duration-200 h-14 overflow-hidden">
            {props.des}
          </p>
        </article>
      </div>
      {modal && (
        <div
          className={`${
            modal ? "visiable" : "hide"
          } fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-10 duration-300 ease-linear`}
        >
          <div className="absolute h-full w-full top-0 left-0 bg-white opacity-80 blur-sm -z-10"></div>
          <div className="absolute w-[95%] lg:w-2/3 p-12 bg-slate-100 z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-sm overflow-y-auto">
            <button
              onClick={(prev) => setModal(!prev)}
              className="absolute right-5 top-5 cursor-pointer w-10 h-10 bg-black rounded-full flex items-center justify-center"
            >
              <IoCloseSharp size={30} className="text-white leading-10" />
            </button>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <Image
                  className="w-full h-full object-cover object-top"
                  src={props.ServiceImage}
                  alt="Services"
                />
              </div>
              <div>
                <h3 className="text-4xl text-black font-roboto-serif font-semibold mb-4">
                  {props.ServiceTitle}
                </h3>
                <p className="text-lg font-dm-sans font-normal">{props.des}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;

"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { data } from "@/app/Demo";
const Services = (props) => {
  const router = useRouter();
  const [modal, setModal] = useState(false);

  const HandleParemeter = () => {
    setModal((prev) => !prev);
  };
  return (
    <>
      <div
        onClick={HandleParemeter}
        className="group bg-gray-100 rounded-2xl p-8 hover:bg-black duration-200 cursor-pointer"
      >
        <span className="flex items-center justify-center bg-black w-20 h-20 rounded-full mb-10 group-hover:bg-white duration-200">
          {props.icon}
        </span>
        <article>
          <h4 className="text-xl font-roboto-serif font-medium mb-3 group-hover:text-white duration-200">
            {props.ServiceTitle}
          </h4>
          <p className="text-lg font-dm-sans font-light group-hover:text-white duration-200">
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
          <div className="absolute w-1/2 p-12 bg-white z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <span
              onClick={(prev) => setModal(!prev)}
              className="absolute right-5 top-5 cursor-pointer"
            >
              close
            </span>
            <h1>{`${props.ServiceTitle} ${props.des}`}</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;

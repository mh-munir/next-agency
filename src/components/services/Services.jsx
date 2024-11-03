import React from "react";

const Services = (props) => {
  return (
    <div className="group bg-gray-100 rounded-2xl p-8 hover:bg-black duration-200">
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
  );
};

export default Services;

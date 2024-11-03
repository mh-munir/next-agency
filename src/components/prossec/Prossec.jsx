import React from "react";

const Prossec = (props) => {
  return (
    <div className="p-8 border-4 border-gray-100 rounded-xl relative">
      <div className="flex items-center justify-center gap-4 mb-6 absolute -top-10  left-1/2 bg-white -translate-x-1/2 p-2">
        <span className="flex items-center justify-center bg-black w-16 h-16 rounded-full duration-200">
          {props.icon}
        </span>
        <h4 className="text-xl font-roboto-serif font-medium duration-200">
          {props.title}
        </h4>
      </div>
      <article className="text-lg font-dm-sans font-light pt-5">
        {props.des}
      </article>
    </div>
  );
};

export default Prossec;

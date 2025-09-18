import React from "react";

const LeftSec = ({ heading, title, subheading }) => {
  return (
    <>
      <div className="p-10 ">
        <p className="text-[rgba(181,2555,109)] text-xl mt-3 ">✧ {heading}</p>
        <h1 className="text-5xl text-white mt-3 font-bold font-sans">
          {title}
        </h1>
        <p className=" text-white text-xl mt-3">{subheading}</p>
      </div>
    </>
  );
};

export default LeftSec;

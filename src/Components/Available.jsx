import React from "react";

const Available = () => {
  return (
    <>
      <p className="flex items-center gap-2 px-3 sm:px-4 font-bold font-sans py-3 rounded-full  bg-[rgba(78,78,78,0.2)] backdrop-blur-lg text-green-200  sm:text-sm">
        <span className="relative flex h-0.5 w-0.5 sm:h-2.5 sm:w-2.5">
          {/* Animated ring */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
          {/* Solid dot */}
          <span className="relative  rounded-full h-0.5 w-0.5 sm:h-2.5 sm:w-2.5 bg-green-300"></span>
        </span>
        Available for work
      </p>
    </>
  );
};

export default Available;

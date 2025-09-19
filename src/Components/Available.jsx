import React from "react";

const Available = () => {
  return (
    <>
      <p className="flex items-center gap-2 px-3 sm:px-4 font-bold font-quicksand py-3 rounded-full bg-[rgba(78,78,78,0.2)] backdrop-blur-lg text-[#7bf958] text-xs sm:text-sm">
        <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
          {/* Animated ring */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#7bf958] opacity-75 animate-ping"></span>
          {/* Solid dot */}
          <span className="relative rounded-full h-full w-full bg-[#7bf958]"></span>
        </span>
        Available for work
      </p>
    </>
  );
};

export default Available;

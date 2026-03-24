import React from "react";

const Available = () => {
  return (
    <>
      <p className="flex items-center gap-2 px-3 sm:px-4 font-bold font-sans py-3 rounded-full bg-white/5 backdrop-blur-lg text-accent text-xs sm:text-sm">
        <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
          {/* Animated ring */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping"></span>
          {/* Solid dot */}
          <span className="relative rounded-full h-full w-full bg-accent"></span>
        </span>
        Available for work
      </p>
    </>
  );
};

export default Available;

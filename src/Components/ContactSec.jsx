import React from "react";
import AnimatedBtn from "./AnimatedBtn";

const ContactSec = () => {
  return (
    <div className="bg-[#111116] rounded-2xl sm:rounded-3xl px-6 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20 text-center w-full">
      {/* Status Badge */}
      <div className="flex justify-center mb-6">
        <p className="flex items-center gap-2 px-3 sm:px-4 py-1 rounded-full bg-green-900/40 text-green-200 text-xs sm:text-sm">
          <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-green-500 animate-pulse"></span>
          Available for work
        </p>
      </div>

      {/* Main Heading */}
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug sm:leading-tight">
        Let's create your <br className="hidden sm:block" /> next big idea.
      </h1>

      {/* Button */}
      <div className="mt-8 sm:mt-10">
        <AnimatedBtn title="Contact Me" />
      </div>
    </div>
  );
};

export default ContactSec;

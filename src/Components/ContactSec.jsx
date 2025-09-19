import React from "react";
import AnimatedBtn from "./AnimatedBtn";
import Available from "./Available";

const ContactSec = () => {
  return (
    <div className="bg-[rgba(78,78,78,0.1)] rounded-2xl px-5 sm:rounded-3xl border border-gray-900 sm:px-8 md:px-12 py-8 sm:py-16 md:py-20 text-center w-full font-quicksand">
      {/* Status Badge */}
      <div className="flex justify-center mb-6">
        <Available />
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

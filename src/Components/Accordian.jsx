import React, { useState } from "react";

const Accordion = ({ title, description, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border my-5 mx-2 rounded-2xl border-gray-800 cursor-pointer transition-all duration-300 ${
        isOpen ? "bg-gray-900/20" : ""
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 text-white">
        <div className="flex items-center gap-3">
          {icon && <span className="text-xl">{icon}</span>}
          <h2 className="text-lg font-medium">{title}</h2>
        </div>
        <span className="text-2xl text-blue-900">{isOpen ? "−" : "+"}</span>
      </div>

      {/* Content */}
      <div
        className={`overflow-hidden transition-all duration-500 px-6 ${
          isOpen ? "max-h-40 opacity-100 py-2" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm text-gray-200 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default Accordion;

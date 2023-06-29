import React, { useState } from "react";

const AccordianItem = ({ heading, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordianItem = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-color-6 rounded-2xl px-4">
      <h2>
        <button
          type="button"
          className="flex w-full items-center justify-between py-5 text-left font-medium text-color-5"
          onClick={toggleAccordianItem}
        >
          <span>{heading}</span>
          <svg
            data-accordion-icon
            className={`h-6 w-6 shrink-0 ${isOpen?"":"rotate-180"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div className={isOpen?"":"hidden"}>
        <div className="py-5 px-4 bg-color-7 rounded-3xl">
          <p className="mb-1 text-color-5">{children}</p>
        </div>
      </div>
    </div>
  );
};

export default AccordianItem;

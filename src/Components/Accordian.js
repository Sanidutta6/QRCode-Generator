import React from "react";
import AccordianItem from "./AccordianItem";

const Accordian = () => {
  return (
    <div
      id="accordion-flush"
      data-accordion="collapse"
      className="bg-color-2 text-white flex flex-col gap-4"
    >
      <AccordianItem heading={"Frame"}>Test</AccordianItem>
      <AccordianItem heading={"Shape & Color"}>
        <form>
          <div class="flex">
            <span class="inline-flex items-center px-2 text-sm text-color-6 bg-color-5 border-none rounded-l-md">
              Height
            </span>
            <input
              type="number"
              id="height"
              class="outline-none rounded-none rounded-r-lg bg-color-7 border text-color-5 block flex-1 min-w-0 w-full text-sm border-color-5 p-2"
              defaultValue={300}
            />
          </div>
          <div class="flex">
            <span class="inline-flex items-center px-2 text-sm text-color-6 bg-color-5 border-none rounded-l-md">
              Width
            </span>
            <input
              type="number"
              id="width"
              class="outline-none rounded-none rounded-r-lg bg-color-7 border text-color-5 block flex-1 min-w-0 w-full text-sm border-color-5 p-2"
              defaultValue={300}
            />
          </div>
          <div class="flex">
            <span class="inline-flex items-center px-2 text-sm text-color-6 bg-color-5 border-none rounded-l-md">
              Margin
            </span>
            <input
              type="number"
              id="margin"
              class="outline-none rounded-none rounded-r-lg bg-color-7 border text-color-5 block flex-1 min-w-0 w-full text-sm border-color-5 p-2"
              defaultValue={0}
            />
          </div>
        </form>
      </AccordianItem>
      <AccordianItem heading={"Logo"}>
        <form>
          <div class="flex">
            <span class="inline-flex items-center px-2 text-sm text-color-6 bg-color-5 border-none rounded-l-md">
              LOGO
            </span>
            <input
              type="url"
              id="margin"
              class="outline-none rounded-none rounded-r-lg bg-color-7 border text-color-5 block flex-1 min-w-0 w-full text-sm border-color-5 p-2"
            />
          </div>
        </form>
      </AccordianItem>
    </div>
  );
};

export default Accordian;

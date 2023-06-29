import React from "react";
import AccordianItem from "./AccordianItem";
import ColorSelection from "./ColorSelection";

const Accordian = () => {
  return (
    <div className="bg-color-2 text-white flex flex-col gap-4 max-h-[210px] overflow-auto">
      <AccordianItem heading={"Shape"}>
        <form>
          <div className="flex">
            <span className="inline-flex items-center px-2 text-sm text-color-6 bg-color-5 border-none rounded-l-md">
              Height
            </span>
            <input
              type="number"
              id="height"
              className="outline-none rounded-none rounded-r-lg bg-color-7 border text-color-5 block flex-1 min-w-0 w-full text-sm border-color-5 p-2"
              defaultValue={300}
            />
          </div>
          <div className="flex mt-4">
            <span className="inline-flex items-center px-2 text-sm text-color-6 bg-color-5 border-none rounded-l-md">
              Width
            </span>
            <input
              type="number"
              id="width"
              className="outline-none rounded-none rounded-r-lg bg-color-7 border text-color-5 block flex-1 min-w-0 w-full text-sm border-color-5 p-2"
              defaultValue={300}
            />
          </div>
          <div className="flex mt-4">
            <span className="inline-flex items-center px-2 text-sm text-color-6 bg-color-5 border-none rounded-l-md">
              Margin
            </span>
            <input
              type="number"
              id="margin"
              className="outline-none rounded-none rounded-r-lg bg-color-7 border text-color-5 block flex-1 min-w-0 w-full text-sm border-color-5 p-2"
              defaultValue={0}
            />
          </div>
        </form>
      </AccordianItem>
      <AccordianItem heading={"Dots Options"}>
        <form>
          <div>
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-color-5"
            >
              Style
            </label>
            <select
              id="countries"
              className="bg-color-7 border outline-none border-gray-300 text-color-5 text-sm rounded-lg block w-full p-2.5"
            >
              <option value="square">Square</option>
              <option value="dots" selected>
                Dots
              </option>
              <option value="rounded">Rounded</option>
              <option value="extra rounded">Extra Rounded</option>
              <option value="classy">Classy</option>
              <option value="extra Classy">Extra Classy</option>
            </select>
          </div>
          <ColorSelection id={"one"} />
          <div className="flex mt-4">
            <span className="inline-flex items-center px-2 text-sm text-color-6 bg-color-5 border-none rounded-l-md">
              Rotation
            </span>
            <input
              type="number"
              id="rotation"
              className="outline-none rounded-none rounded-r-lg bg-color-7 border text-color-5 block flex-1 min-w-0 w-full text-sm border-color-5 p-2"
              defaultValue={0}
            />
          </div>
        </form>
      </AccordianItem>
      <AccordianItem heading={"Corner Square Options"}>
        <form>
          <div>
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-color-5"
            >
              Select an option
            </label>
            <select
              id="countries"
              className="bg-color-7 border outline-none border-gray-300 text-color-5 text-sm rounded-lg block w-full p-2.5"
            >
              <option value="none" selected>
                None
              </option>
              <option value="square">Square</option>
              <option value="rounded">Rounded</option>
              <option value="extra rounded">Extra Rounded</option>
            </select>
          </div>
          <ColorSelection id={"two"} />
          <div className="flex mt-4">
            <span className="inline-flex items-center px-2 text-sm text-color-6 bg-color-5 border-none rounded-l-md">
              Rotation
            </span>
            <input
              type="number"
              id="rotation"
              className="outline-none rounded-none rounded-r-lg bg-color-7 border text-color-5 block flex-1 min-w-0 w-full text-sm border-color-5 p-2"
              defaultValue={0}
            />
          </div>
        </form>
      </AccordianItem>
      <AccordianItem heading={"Corner Dots Options"}>
        <form>
        <ColorSelection id={"three"} />
        </form>
      </AccordianItem>
      <AccordianItem heading={"Background Options"}>
        <form>
        </form>
      </AccordianItem>
      <AccordianItem heading={"QR Options"}>
        <form>
        </form>
      </AccordianItem>
      <AccordianItem heading={"Logo"}>
        <form>
          <div className="flex">
            <span className="inline-flex items-center px-2 text-sm text-color-6 bg-color-5 border-none rounded-l-md">
              LOGO
            </span>
            <input
              type="url"
              id="margin"
              className="outline-none rounded-none rounded-r-lg bg-color-7 border text-color-5 block flex-1 min-w-0 w-full text-sm border-color-5 p-2"
              placeholder="Paste URL"
            />
          </div>
          <div className="flex mt-4">
            <span className="inline-flex items-center px-2 text-sm text-color-6 bg-color-5 border-none rounded-l-md">
              Image Size
            </span>
            <input
              type="number"
              id="image-size"
              className="outline-none rounded-none rounded-r-lg bg-color-7 border text-color-5 block flex-1 min-w-0 w-full text-sm border-color-5 p-2"
              defaultValue={0}
            />
          </div>
          <div className="flex  mt-4">
            <span className="inline-flex items-center px-2 text-sm text-color-6 bg-color-5 border-none rounded-l-md">
              Margin
            </span>
            <input
              type="number"
              id="logo-margin"
              className="outline-none rounded-none rounded-r-lg bg-color-7 border text-color-5 block flex-1 min-w-0 w-full text-sm border-color-5 p-2"
              defaultValue={0}
            />
          </div>
        </form>
      </AccordianItem>
    </div>
  );
};

export default Accordian;

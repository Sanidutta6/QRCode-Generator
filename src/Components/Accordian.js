import React from "react";
import AccordianItem from "./AccordianItem";

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
          <div className="flex">
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
          <div className="flex">
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
              Select an option
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
          <div>
            <h3 className="block mb-2 text-sm font-medium text-color-5">
              Color Type
            </h3>
            <ul className="items-center w-full text-sm font-medium text-color-5 border border-gray-200 rounded-lg sm:flex">
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                <div className="flex items-center pl-3">
                  <input
                    id="color-type-single"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                  />
                  <label
                    htmlFor="color-type-single"
                    className="w-full py-3 ml-2 text-sm font-medium text-color-5"
                  >
                    Single Color
                  </label>
                </div>
              </li>
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                <div className="flex items-center pl-3">
                  <input
                    id="color-type-gradient"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                  />
                  <label
                    for="color-type-gradient"
                    className="w-full py-3 ml-2 text-sm font-medium text-color-5"
                  >
                    Color Gradient
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="block mb-2 text-sm font-medium text-color-5">
              Gradient Type
            </h3>
            <ul className="items-center w-full text-sm font-medium text-color-5 bg-color-7 border border-gray-200 rounded-lg sm:flex">
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                <div className="flex items-center pl-3">
                  <input
                    id="gradient-type-linear"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="w-4 h-4 text-blue-600 bg-color-7 border-gray-300"
                  />
                  <label
                    for="gradient-type-linear"
                    className="w-full py-3 ml-2 text-sm font-medium text-color-5"
                  >
                    Linear
                  </label>
                </div>
              </li>
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                <div className="flex items-center pl-3">
                  <input
                    id="gradient-type-radial"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                  />
                  <label
                    for="gradient-type-radial"
                    className="w-full py-3 ml-2 text-sm font-medium text-color-5"
                  >
                    Radial
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="block mb-2 text-sm font-medium text-color-5">
              Dots Gradient
            </h3>
            <ul className="items-center w-full text-sm font-medium text-color-5 bg-color-7 border border-gray-200 rounded-lg sm:flex">
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                <div className="flex items-center pl-3">
                  <input type="color" value="" className="" />
                </div>
              </li>
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                <div className="flex items-center pl-3">
                  <input type="color" value="" className="" />
                </div>
              </li>
            </ul>
          </div>
          <div className="flex">
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
          <div>
            <h3 className="block mb-2 text-sm font-medium text-color-5">
              Color Type
            </h3>
            <ul className="items-center w-full text-sm font-medium text-color-5 border border-gray-200 rounded-lg sm:flex">
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                <div className="flex items-center pl-3">
                  <input
                    id="color-type-single"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                  />
                  <label
                    htmlFor="color-type-single"
                    className="w-full py-3 ml-2 text-sm font-medium text-color-5"
                  >
                    Single Color
                  </label>
                </div>
              </li>
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                <div className="flex items-center pl-3">
                  <input
                    id="color-type-gradient"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                  />
                  <label
                    for="color-type-gradient"
                    className="w-full py-3 ml-2 text-sm font-medium text-color-5"
                  >
                    Color Gradient
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="block mb-2 text-sm font-medium text-color-5">
              Gradient Type
            </h3>
            <ul className="items-center w-full text-sm font-medium text-color-5 bg-color-7 border border-gray-200 rounded-lg sm:flex">
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                <div className="flex items-center pl-3">
                  <input
                    id="gradient-type-linear"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="w-4 h-4 text-blue-600 bg-color-7 border-gray-300"
                  />
                  <label
                    for="gradient-type-linear"
                    className="w-full py-3 ml-2 text-sm font-medium text-color-5"
                  >
                    Linear
                  </label>
                </div>
              </li>
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                <div className="flex items-center pl-3">
                  <input
                    id="gradient-type-radial"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                  />
                  <label
                    for="gradient-type-radial"
                    className="w-full py-3 ml-2 text-sm font-medium text-color-5"
                  >
                    Radial
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="block mb-2 text-sm font-medium text-color-5">
              Dots Gradient
            </h3>
            <ul className="items-center w-full text-sm font-medium text-color-5 bg-color-7 border border-gray-200 rounded-lg sm:flex">
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                <div className="flex items-center pl-3">
                  <input type="color" value="" className="" />
                </div>
              </li>
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                <div className="flex items-center pl-3">
                  <input type="color" value="" className="" />
                </div>
              </li>
            </ul>
          </div>
          <div className="flex">
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
            />
          </div>
        </form>
      </AccordianItem>
    </div>
  );
};

export default Accordian;

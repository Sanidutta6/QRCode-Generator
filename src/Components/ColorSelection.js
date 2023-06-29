import React from "react";

const ColorSelection = ({id}) => {
  return (
    <React.Fragment>
      <div>
        <h3 className="block mb-2 text-sm font-medium text-color-5">
          Color Type
        </h3>
        <ul className="items-center w-full text-sm font-medium text-color-5 border border-gray-200 rounded-lg sm:flex">
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
            <div className="flex items-center pl-3">
              <input
                id={`${id}-single`}
                type="radio"
                value=""
                name={`list-radio-${id}-1`}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                checked
              />
              <label
                htmlFor={`${id}-single`}
                className="w-full py-3 ml-2 text-sm font-medium text-color-5"
              >
                Single Color
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
            <div className="flex items-center pl-3">
              <input
                id={`${id}-gradient`}
                type="radio"
                value=""
                name={`list-radio-${id}-1`}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
              />
              <label
                htmlFor={`${id}-gradient`}
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
                id={`${id}-gradient-linear`}
                type="radio"
                value=""
                name={`list-radio-${id}-2`}
                className="w-4 h-4 text-blue-600 bg-color-7 border-gray-300"
                checked
              />
              <label
                htmlFor={`${id}-gradient-linear`}
                className="w-full py-3 ml-2 text-sm font-medium text-color-5"
              >
                Linear
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
            <div className="flex items-center pl-3">
              <input
                id={`${id}-gradient-radial`}
                type="radio"
                value=""
                name={`list-radio-${id}-2`}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
              />
              <label
                htmlFor={`${id}-gradient-radial`}
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
            <div className="flex items-center justify-center">
              <input type="color" value="" className="" />
            </div>
          </li>
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
            <div className="flex items-center justify-center">
              <input type="color" value="" className="" />
            </div>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default ColorSelection;

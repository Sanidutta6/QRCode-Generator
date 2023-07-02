import React, { useState } from "react";
import Input from "./Input";

const ColorSelection = ({ id, onUpdate, qrCodeOptions }) => {
  const [colorType, setColorType] = useState("single");

  const handleColorTypeChange = async (event) => {
    const { value } = event.target;
    setColorType(value);

    if (value === "single") {
      await onUpdate((prevOptions) => {
        const updatedOptions = { ...prevOptions };
        if (updatedOptions.dotsOptions.gradient) {
          delete updatedOptions.dotsOptions.gradient; // Remove gradient property
        }
        updatedOptions.dotsOptions.color = "#000000"; // Add color property
        return updatedOptions;
      });
    } else if (value === "gradient") {
      await onUpdate((prevOptions) => {
        const updatedOptions = { ...prevOptions };
        if (updatedOptions.dotsOptions.color) {
          delete updatedOptions.dotsOptions.color; // Remove color property
        }
        updatedOptions.dotsOptions.gradient = {
          type: "linear",
          rotation: "0",
          colorStops: [
            { offset: 0, color: "#000000" },
            { offset: 1, color: "#000000" },
          ],
        };
        return updatedOptions;
      });
    }
  };

  const handleColorChange = (event, colorIndex) => {
    const { value } = event.target;
    onUpdate((prevOptions) => {
      const dotsOptions = { ...prevOptions.dotsOptions };
      if (colorType === "single") {
        dotsOptions.color = value;
      } else if (colorType === "gradient") {
        dotsOptions.gradient.colorStops[colorIndex] = {
          offset: colorIndex,
          color: value,
        };
      }
      return {
        ...prevOptions,
        dotsOptions,
      };
    });
  };

  const handleGradientTypeChange = (event, type) => {
    onUpdate((prevOptions) => ({
      ...prevOptions,
      dotsOptions: {
        ...prevOptions.dotsOptions,
        gradient: {
          ...prevOptions.dotsOptions.gradient,
          type: type,
        },
      },
    }));
  };

  const handleRotationChange = (event) => {
    const { value } = event.target;
    if (value >= 0 && value <= 360) {
      onUpdate((prevOptions) => ({
        ...prevOptions,
        dotsOptions: {
          ...prevOptions.dotsOptions,
          gradient: {
            ...prevOptions.dotsOptions.gradient,
            rotation: Number(value),
          },
        },
      }));
    }
  };

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
                value="single"
                name={`list-radio-${id}-1`}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                checked={colorType === "single"}
                onChange={handleColorTypeChange}
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
                value="gradient"
                name={`list-radio-${id}-1`}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                checked={colorType === "gradient"}
                onChange={handleColorTypeChange}
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
      {colorType === "single" && (
        <div>
          <h3 className="block mb-2 text-sm font-medium text-color-5">
            Single Color
          </h3>
          <ul className="items-center w-full text-sm font-medium text-color-5 bg-color-7 border border-gray-200 rounded-lg sm:flex">
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
              <div className="flex items-center justify-center">
                <input
                  type="color"
                  value={qrCodeOptions.dotsOptions.color || "#000000"}
                  onChange={(event) => handleColorChange(event, 0)}
                  className="bg-color-7"
                />
              </div>
            </li>
          </ul>
        </div>
      )}
      {colorType === "gradient" && (
        <React.Fragment>
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
                    defaultValue={"linear"}
                    name={`list-radio-${id}-2`}
                    className="w-4 h-4 text-blue-600 bg-color-7 border-gray-300"
                    checked={ qrCodeOptions.dotsOptions.gradient ?
                      qrCodeOptions.dotsOptions.gradient.type === "linear": false
                    }
                    onChange={(event) =>
                      handleGradientTypeChange(event, "linear")
                    }
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
                    defaultValue={"radial"}
                    name={`list-radio-${id}-2`}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                    checked={qrCodeOptions.dotsOptions.gradient ?
                      qrCodeOptions.dotsOptions.gradient.type === "radial": false
                    }
                    onChange={(event) =>
                      handleGradientTypeChange(event, "radial")
                    }
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
              Color Gradient
            </h3>
            <ul className="items-center w-full text-sm font-medium text-color-5 bg-color-7 border border-gray-200 rounded-lg sm:flex">
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                <div className="flex items-center justify-center">
                  <input
                    type="color"
                    value={
                      qrCodeOptions.dotsOptions.gradient.colorStops[0].color ||
                      "#000000"
                    }
                    onChange={(event) => handleColorChange(event, 0)}
                    className="bg-color-7"
                  />
                </div>
              </li>
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                <div className="flex items-center justify-center">
                  <input
                    type="color"
                    value={
                      qrCodeOptions.dotsOptions.gradient.colorStops[1].color ||
                      "#000000"
                    }
                    onChange={(event) => handleColorChange(event, 1)}
                    className="bg-color-7"
                  />
                </div>
              </li>
            </ul>
          </div>
          <Input
            type="number"
            label="Rotation"
            name={`${id}-rotation`}
            value={qrCodeOptions.dotsOptions.gradient.rotation}
            onChange={handleRotationChange}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ColorSelection;

import React, { useContext } from "react";
import AccordianItem from "./AccordianItem";
import ColorSelection from "./ColorSelection";
import Input from "./Input";
import QRContext from "../Context/QRContext";

const Accordian = () => {
  const { qrCodeOptions, updateQRCodeOptions } = useContext(QRContext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "dotsOptionsType") {
      const updateDotOptions = (prevOptions) => ({
        ...prevOptions,
        dotsOptions: {
          ...prevOptions.dotsOptions,
          type: value,
        },
      });
      updateQRCodeOptions(updateDotOptions);
    } else {
      updateQRCodeOptions({
        [name]: value,
      });
    }
  };

  return (
    <div className="bg-color-2 text-white flex flex-col gap-4 max-h-[210px] overflow-auto">
      <AccordianItem heading={"Shape"}>
        <form>
          <Input
            type="number"
            label="Height"
            name="height"
            value={qrCodeOptions.height}
            onChange={(event) => handleInputChange(event)}
          />
          <Input
            type="number"
            label="Width"
            name="width"
            value={qrCodeOptions.width}
            onChange={handleInputChange}
          />
          <Input
            type="number"
            label="Margin"
            name="margin"
            value={qrCodeOptions.margin}
            onChange={handleInputChange}
          />
        </form>
        <div>
          <p className="text-lg font-medium text-center text-color-5 tracking-[3px]">...</p>
        </div>
      </AccordianItem>
      <AccordianItem heading={"Dots Options"}>
        <form>
          <div>
            <label
              htmlFor="dotsOptionsType"
              className="block mb-2 text-sm font-medium text-color-5"
            >
              Style
            </label>
            <select
              id="dotsOptionsType"
              name="dotsOptionsType"
              className="bg-color-7 border outline-none border-gray-300 text-color-5 text-sm rounded-lg block w-full p-2.5"
              onChange={handleInputChange}
            >
              <option value="square">Square</option>
              <option value="dots" defaultChecked>
                Dots
              </option>
              <option value="rounded">Rounded</option>
              <option value="extra-rounded">Extra Rounded</option>
              <option value="classy">Classy</option>
              <option value="classy-rounded">Classy Rounded</option>
            </select>
          </div>
          <ColorSelection
            id={"dotsOptionsColors"}
            onUpdate={updateQRCodeOptions}
            qrCodeOptions={qrCodeOptions}
          />
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
              <option value="none" defaultChecked>
                None
              </option>
              <option value="square">Square</option>
              <option value="rounded">Rounded</option>
              <option value="extra rounded">Extra Rounded</option>
            </select>
          </div>
          <ColorSelection
            id={"two"}
            onUpdate={updateQRCodeOptions}
            qrCodeOptions={qrCodeOptions}
          />
          <Input type="number" label="Rotation" value={0} />
        </form>
      </AccordianItem>
      <AccordianItem heading={"Corner Dots Options"}>
        <form>
          <ColorSelection
            id={"three"}
            onUpdate={updateQRCodeOptions}
            qrCodeOptions={qrCodeOptions}
          />
        </form>
      </AccordianItem>
      <AccordianItem heading={"Background Options"}>
        <form>
          <ColorSelection
            id={"four"}
            onUpdate={updateQRCodeOptions}
            qrCodeOptions={qrCodeOptions}
          />
        </form>
      </AccordianItem>
      <AccordianItem heading={"QR Options"}>
        <form>
          <Input type="number" label="Type Number" value={0} />
          <div>
            <label
              htmlFor="qrOptionsMode"
              className="block mb-2 text-sm font-medium text-color-5"
            >
              Mode
            </label>
            <select
              id="qrOptionsMode"
              name="qrOptionsMode"
              className="bg-color-7 border outline-none border-gray-300 text-color-5 text-sm rounded-lg block w-full p-2.5"
              onChange={handleInputChange}
            >
              <option value="Numeric">Numeric</option>
              <option value="Alphanumeric">Alphanumeric</option>
              <option value="Byte" defaultChecked>
                Byte
              </option>
              <option value="Kanji">Kanji</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="qrOptionsMode"
              className="block mb-2 text-sm font-medium text-color-5"
            >
              Error Correction Level
            </label>
            <select
              id="qrOptionsMode"
              name="qrOptionsMode"
              className="bg-color-7 border outline-none border-gray-300 text-color-5 text-sm rounded-lg block w-full p-2.5"
              onChange={handleInputChange}
            >
              <option value="L">L</option>
              <option value="M">M</option>
              <option value="Q" defaultChecked>
                Q
              </option>
              <option value="H">H</option>
            </select>
          </div>
        </form>
      </AccordianItem>
      <AccordianItem heading={"Logo"}>
        <form>
          <div className="flex items-center">
            <input
              checked
              id="hide-background-dots"
              name="hide-background-dots"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
            />
            <label
              htmlFor="hide-background-dots"
              className="ml-2 text-sm font-medium text-color-5"
            >
              Hide Background Dots
            </label>
          </div>
          <Input type="url" label="LOGO" value={"Paste URL"} />
          <Input type="number" label="Image Size" value={0.4} />
          <Input type="number" label="Margin" value={0} />
        </form>
      </AccordianItem>
    </div>
  );
};

export default Accordian;

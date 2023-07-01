import React, { useContext } from "react";
import AccordianItem from "./AccordianItem";
import ColorSelection from "./ColorSelection";
import Input from "./Input";
import QRContext from "../Context/QRContext";

const Accordian = () => {
  const { qrCodeOptions, updateQRCodeOptions } = useContext(QRContext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    updateQRCodeOptions((prevOptions) => ({
      ...prevOptions,
      [name]: value,
    }));
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
              <option value="dots" defaultChecked>
                Dots
              </option>
              <option value="rounded">Rounded</option>
              <option value="extra rounded">Extra Rounded</option>
              <option value="classy">Classy</option>
              <option value="extra Classy">Extra Classy</option>
            </select>
          </div>
          <ColorSelection id={"one"} />
          <Input type="number" label="Rotation" value={0} />
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
          <ColorSelection id={"two"} />
          <Input type="number" label="Rotation" value={0} />
        </form>
      </AccordianItem>
      <AccordianItem heading={"Corner Dots Options"}>
        <form>
          <ColorSelection id={"three"} />
        </form>
      </AccordianItem>
      <AccordianItem heading={"Background Options"}>
        <form></form>
      </AccordianItem>
      <AccordianItem heading={"QR Options"}>
        <form></form>
      </AccordianItem>
      <AccordianItem heading={"Logo"}>
        <form>
          <Input type="url" label="LOGO" value={"Paste URL"} />
          <Input type="number" label="Image Size" value={0} />
          <Input type="number" label="Margin" value={0} />
        </form>
      </AccordianItem>
    </div>
  );
};

export default Accordian;

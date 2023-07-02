import React, { useState } from "react";
import QRContext from "../Context/QRContext";

const QRContextProvider = ({ children }) => {
  const initialQRCodeOptions = {
    width: 150,
    height: 150,
    type: "svg",
    margin: 0,
    data: "https://qr-code-styling.com",
    dotsOptions: {
      type: "rounded",
      color: "#000000",
    },
    backgroundOptions: {
      color: "#FFFFFF",
    },
    imageOptions: {
      hideBackgroundDots: "true",
      imageSize: "0",
      crossOrigin: "anonymous",
      margin: 20,
    },
    cornersSquareOptions: {
      type: "square",
      color: "#000000",
    },
    cornersDotOptions: {
      type: "rounded",
      color: "#000000",
    },
  };

  const [qrCodeOptions, setQRCodeOptions] = useState(initialQRCodeOptions);

  const updateQRCodeOptions = (newOptions) => {
    setQRCodeOptions((prevOptions) => ({
      ...prevOptions,
      ...(typeof newOptions === "function"
        ? newOptions(prevOptions)
        : newOptions),
    }));
    // console.log(qrCodeOptions);
  };

  const contextValue = {
    qrCodeOptions,
    updateQRCodeOptions,
  };

  return (
    <QRContext.Provider value={contextValue}>{children}</QRContext.Provider>
  );
};

export default QRContextProvider;

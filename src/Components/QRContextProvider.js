import React, { useState } from "react";
import QRContext from "../Context/QRContext";

const QRContextProvider = ({ children }) => {
  const initialQRCodeOptions = {
    width: 150,
    height: 150,
    type: "svg",
    dotsOptions: {
      color: "#FFFFFF",
      type: "rounded",
    },
    backgroundOptions: {
      color: "#00288A",
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 20,
    },
    data: "https://qr-code-styling.com",
  };

  const [qrCodeOptions, setQRCodeOptions] = useState(initialQRCodeOptions);

  const updateQRCodeOptions = (newOptions) => {
    // console.log(newOptions())
    setQRCodeOptions((prevOptions) => ({
      ...prevOptions,
      ...newOptions(),
    }));
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
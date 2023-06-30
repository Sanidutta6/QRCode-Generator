import React, { useMemo } from "react";
import QRContext from "../Context/QRContext";

const QRContextProvider = ({ children }) => {
  // Place your context values here
  const qrCodeOptions = useMemo(
    () => ({
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
    }),
    []
  );

  return (
    <QRContext.Provider value={qrCodeOptions}>
      {children}
    </QRContext.Provider>
  );
};

export default QRContextProvider;
import React, { useRef, useEffect, useMemo } from "react";
import QRCodeStyling from "qr-code-styling";

const QRCode = ({ content }) => {
  const ref = useRef(null);

  const qrCode = useMemo(
    () =>
      new QRCodeStyling({
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

  useEffect(() => {
    qrCode.append(ref.current);
  }, [qrCode]);

  useEffect(() => {
    qrCode.update({
      data: content,
    });
  }, [content, qrCode]);

  return <div ref={ref}></div>;
};

export default QRCode;

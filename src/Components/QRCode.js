import React, { useRef, useEffect, useContext } from "react";
import QRCodeStyling from "qr-code-styling";
import QRContext from "../Context/QRContext";

const QRCode = () => {
  const ref = useRef(null);
  const qrCodeOptions = useContext(QRContext).qrCodeOptions;

  useEffect(() => {
    const qrCode = new QRCodeStyling(qrCodeOptions);
    qrCode.append(ref.current);
    qrCode.update({
      data: qrCodeOptions.data,
    });
  }, [qrCodeOptions]);

  return <div ref={ref}></div>;
};

export default QRCode;

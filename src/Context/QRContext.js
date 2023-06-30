import { createContext } from "react";

const QRContext = createContext({
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
  data: "Hello World!",
});

export default QRContext;

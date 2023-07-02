import "./App.css";
import QRCode from "./Components/QRCode";
import Accordian from "./Components/Accordian";
import QRContextProvider from "./Components/QRContextProvider";

function App() {
  return (
    <div className="App">
      <div className="flex h-screen w-screen items-center justify-center bg-color-1">
        <div className="flex h-4/5 w-4/5 items-center justify-between gap-2 rounded-[36px] border-[12px] border-color-5 bg-color-1 p-12">
          {/* <!-- Menu --> */}
          <div className="flex w-20 flex-col items-center justify-center gap-6 rounded-3xl bg-color-5 py-6">
            {/* <!-- Logo --> */}
            <div className="">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600">
                <svg
                  className="absolute -left-1 h-12 w-12 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>

            {/* <!-- Link --> */}
            <div className="h-9 hover:bg-color-6 hover:text-color-5 hover:rounded-full">
              <img
                className="h-6"
                src="https://www.svgrepo.com/show/505044/url-checker.svg"
                alt="Text"
              />
            </div>

            {/* <!-- Text --> */}
            <div className="">
              <img
                className="h-6"
                src="https://www.svgrepo.com/show/500442/text-size.svg"
                alt="Text"
              />
            </div>

            {/* <!-- Wifi --> */}
            <div className="">
              <img
                className="h-6"
                src="https://www.svgrepo.com/show/511209/wifi-high.svg"
                alt="Text"
              />
            </div>

            {/* <!-- Image --> */}
            <div className="">
              <img
                className="h-6"
                src="https://www.svgrepo.com/show/505669/image-1.svg"
                alt="Text"
              />
            </div>

            {/* <!-- Music --> */}
            <div className="">
              <img
                className="h-6"
                src="https://www.svgrepo.com/show/505711/music.svg"
                alt="Text"
              />
            </div>
          </div>

          {/* <!-- Text/Upload --> */}
          <div className="">
            {/* <!-- For Link --> */}
            <div className="">
              <h1 className="mb-2 text-6xl font-normal text-color-2">
                Enter your link
              </h1>
              <input
                className="block w-full bg-color-1 py-2 font-mono text-sm outline-none placeholder:text-color-2"
                placeholder="Your QR Code will be generated automatically"
                type="text"
                name="search"
              />
            </div>
            {/* <!-- For Text --> */}
            {/* <!-- Wifi --> */}
            {/* <!-- Image --> */}
            {/* <!-- Music --> */}
          </div>

          {/* <!-- QR Section --> */}
          <div className="max-w-lg w-2/6 rounded-xl border border-gray-200 bg-color-2 p-6 shadow">
            <QRContextProvider>
              <div className="mb-8 flex items-center justify-center">
                <QRCode />
              </div>
              <Accordian />
              <div className="flex items-center justify-center gap-8">
                <button className="text-color-5 bg-color-3 rounded-2xl text-sm px-4 py-2">
                  JPEG
                </button>
                <button className="text-color-5 bg-color-4 rounded-2xl text-sm px-4 py-2">
                  PNG
                </button>
              </div>
            </QRContextProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

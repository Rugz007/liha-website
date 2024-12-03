import { useRef } from "react";
import "./App.css";
import { FaDiscord, FaGithubAlt } from "react-icons/fa";

function App() {
  const appRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={appRef}
      className="app h-[100vh] w-full flex justify-center pt-10 z-10"
    >
      <div className="flex flex-col items-center w-full text-center">
        <img src="appicon.png" alt="app icon" className="w-32 h-32" />
        <p className="text-3xl font-mono w-full">liha</p>
        <br />
        <p className="w-full text-5xl font-serif">
          Your private, secure and free second brain.
        </p>
        <div className="flex  flex-col lg:flex-row gap-8 justify-center mt-10 w-[50%]">
          <div className="flex flex-col items-center border border-black p-10 rounded-md min-w-[33%]">
            <img
              src="Bubble.png"
              alt="bubble"
              className="w-16 h-16 object-contain"
              style={{ imageRendering: "pixelated" }}
            />
            <p className="mt-2 text-3xl font-mono">AI-Enabled</p>
          </div>
          <div className="flex flex-col items-center border border-black p-10 rounded-md min-w-[34%]">
            <img
              src="Person_Group.png"
              alt="open source"
              className="w-16 h-16 object-contain"
              style={{ imageRendering: "pixelated" }}
            />
            <p className="mt-2 text-3xl font-mono">Open Source</p>
          </div>
          <div className="flex flex-col items-center border border-black p-10 rounded-md min-w-[33%]">
            <img
              src="close.png"
              alt="closed"
              className="w-16 h-16 object-contain"
              style={{ imageRendering: "pixelated" }}
            />
            <p className="mt-2 text-3xl font-mono">Private</p>
          </div>
        </div>
        <div className="flex gap-9">
          <a
            href="https://github.com/Rugz007/liha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubAlt className="text-6xl mt-10" />
          </a>
          <a
            href="https://discord.gg/xbCfvV9ADf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord className="text-6xl mt-10" />
          </a>
          {/* Add screenshot.png as a peeking image from the bottom */}
          
        </div>
        <img
            src="screenshot.png"
            alt="screenshot"
            className="w-full h-0 lg:h-[400px] xl:h-[500px] z-1 object-top object-cover absolute bottom-0"
            style={{
              // Deafult values
              filter: "brightness(.6) contrast(0.8)",
            }}
          />
      </div>
    </div>
  );
}

export default App;

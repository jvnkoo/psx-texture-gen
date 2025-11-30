import CanvasImage from "./CanvasImage";
import { useState } from "react";

// path to your image in /public folder
const imagePath = "/photo_2025-11-30_02-12-58.jpg";

export default function App() {
  const [noiseScale, setNoiseScale] = useState(0.01);
  return (
    <div className="p-4">
      <h1 className="text-xl mb-2 text-center">Canvas Image</h1>
      <div className="mb-4 flex justify-center items-center gap-4">
        <label>Noise scale:</label>
        <input
          type="range"
          min="0.001"
          max="0.1"
          step="0.001"
          value={noiseScale}
          onChange={(e) => setNoiseScale(parseFloat(e.target.value))}
          className="w-64"
        />
        <span className="text-sm">{noiseScale.toFixed(3)}</span>
      </div>
      <div className="flex justify-center items-center border py-2 px-2 w-max mx-auto">
        <CanvasImage src={imagePath} noiseScale={noiseScale} />
      </div>
    </div>
  );
}

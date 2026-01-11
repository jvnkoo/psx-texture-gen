import React from "react";
import { toast } from "react-hot-toast";

const ControlCard = ({ noiseScale, setNoiseScale, pixelSize, setPixelSize }) => {
  return (
    <div className="card bg-base-200 shadow-xl">
      <div className="card-body p-4">
        <h2 className="card-title text-base mb-1">
          Noise and Pixelation Settings
        </h2>
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex-1">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Intensity</span>
                <span className="badge badge-neutral">
                  {noiseScale.toFixed(3)}
                </span>
              </label>
              <input
                type="range"
                min="0.000"
                max="0.1"
                step="0.001"
                value={noiseScale}
                onChange={(e) => {
                  setNoiseScale(parseFloat(e.target.value));
                  if (parseFloat(e.target.value) === 0) {
                    toast("Noise disabled", { icon: "??" });
                  }
                }}
                className="range range-accent w-full"
              />
              <div className="flex justify-between text-xs px-2 mt-1">
                <span>None</span>
                <span>Max</span>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Pixelation</span>
                <span className="badge badge-neutral">{pixelSize}</span>
              </label>
              <input
                type="range"
                min="1"
                max="100"
                step="1"
                value={pixelSize}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  setPixelSize(value);
                  if (value === 1) {
                    toast("Pixelation disabled", { icon: "???" });
                  }
                }}
                className="range range-accent w-full"
              />
              <div className="flex justify-between text-xs px-2 mt-1">
                <span>Max</span>
                <span>Original</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlCard;
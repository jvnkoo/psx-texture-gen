import React from "react";
import { toast } from "react-hot-toast";

const DitheringCard = ({
  dithering,
  setDithering,
  ditherType,
  setDitherType,
  ditherDepth,
  setDitherDepth,
  ditherIntensity,
  setDitherIntensity,
}) => {
  return (
    <div className="card bg-base-200 shadow-xl">
      <div className="card-body p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="card-title text-base">Dithering</h2>
          <label className="cursor-pointer flex items-center gap-2">
            <input
              type="checkbox"
              checked={dithering}
              onChange={(e) => {
                setDithering(e.target.checked);
                if (e.target.checked) {
                  toast.success("Dithering enabled", {
                    duration: 1500,
                    icon: "??",
                  });
                }
              }}
              className="toggle toggle-primary"
            />
            <span className="text-sm font-medium">
              {dithering ? "ON" : "OFF"}
            </span>
          </label>
        </div>

        {dithering && (
          <div className="space-y-4 mt-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Dither Type</span>
              </label>
              <select
                value={ditherType}
                onChange={(e) => {
                  setDitherType(e.target.value);
                  toast(
                    `Dither type: ${
                      e.target.value === "psx"
                        ? "PSX Ordered"
                        : "Bayer Matrix"
                    }`
                  );
                }}
                className="select select-bordered select-sm w-full"
                disabled={!dithering}
              >
                <option value="bayer">Bayer Matrix (Standard)</option>
                <option value="psx">PSX Ordered (Authentic)</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Color Depth</span>
                <span className="badge badge-neutral">{ditherDepth}</span>
              </label>
              <input
                type="range"
                min="1"
                max="64"
                step="1"
                value={ditherDepth}
                onChange={(e) => {
                  setDitherDepth(parseInt(e.target.value));
                }}
                className="range range-secondary"
                disabled={!dithering}
              />
              <div className="flex justify-between text-xs px-2 mt-1">
                <span>1 color</span>
                <span>64 colors</span>
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Intensity</span>
                <span className="badge badge-neutral">
                  {ditherIntensity.toFixed(2)}
                </span>
              </label>
              <input
                type="range"
                min="0.1"
                max="2.0"
                step="0.1"
                value={ditherIntensity}
                onChange={(e) => {
                  setDitherIntensity(parseFloat(e.target.value));
                }}
                className="range range-secondary"
                disabled={!dithering}
              />
              <div className="flex justify-between text-xs px-2 mt-1">
                <span>Subtle</span>
                <span>Strong</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DitheringCard;
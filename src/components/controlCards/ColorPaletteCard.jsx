import React from "react";
import { toast } from "react-hot-toast";

const ColorPaletteCard = ({ paletteSize, setPaletteSize }) => {
  return (
    <div className="card bg-base-200 shadow-xl">
      <div className="card-body p-4">
        <h2 className="card-title text-base">Color Palette</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Colors (PSX: 256 max)</span>
            <span className="badge badge-neutral">{paletteSize}</span>
          </label>
          <input
            type="range"
            min="2"
            max="256"
            step="1"
            value={paletteSize}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              setPaletteSize(value);
              if (value < 256) {
                toast(`Limited to ${value} colors`);
              }
            }}
            className="range range-accent"
          />
          <div className="flex justify-between text-xs px-2 mt-1">
            <span>2 colors</span>
            <span>256 colors</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPaletteCard;
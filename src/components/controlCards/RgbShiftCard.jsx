import React from "react";
import { toast } from "react-hot-toast";

const RgbShiftCard = ({
  rgbShift,
  setRgbShift,
  rgbShiftAmount,
  setRgbShiftAmount,
}) => {
  return (
    <div className="card bg-base-200 shadow-xl">
      <div className="card-body p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="card-title text-base">RGB Shift</h2>
          <label className="cursor-pointer flex items-center gap-2">
            <input
              type="checkbox"
              checked={rgbShift}
              onChange={(e) => {
                setRgbShift(e.target.checked);
                if (e.target.checked) {
                  toast.success("RGB Shift enabled", {
                    duration: 1500,
                    icon: "??",
                  });
                }
              }}
              className="toggle toggle-primary"
            />
            <span className="text-sm font-medium">
              {rgbShift ? "ON" : "OFF"}
            </span>
          </label>
        </div>

        {rgbShift && (
          <div className="space-y-4 mt-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Shift Amount</span>
                <span className="badge badge-neutral">{rgbShiftAmount}</span>
              </label>
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={rgbShiftAmount}
                onChange={(e) => {
                  setRgbShiftAmount(parseInt(e.target.value));
                }}
                className="range range-secondary"
                disabled={!rgbShift}
              />
              <div className="flex justify-between text-xs px-2 mt-1">
                <span>Min</span>
                <span>Max</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RgbShiftCard;
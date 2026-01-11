import React from "react";
import { showImageInfo } from "../../utils/toastHelpers";

const InfoCard = ({ selectedImage }) => {
  return (
    <div className="card bg-base-200 shadow-xl">
      <div className="card-body p-4">
        <div className="text-sm opacity-70 space-y-1">
          <p>Wikimedia Commons</p>
          {selectedImage && (
            <button
              onClick={() => showImageInfo(selectedImage)}
              className="btn btn-xs btn-ghost w-full mt-2"
            >
              Show Image URL
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
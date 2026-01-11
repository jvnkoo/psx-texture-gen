import React from "react";
import { toast } from "react-hot-toast";

const ImageThumbnails = ({ images, selectedImage, onImageSelect, onReset }) => {
  if (images.length === 0) return null;

  return (
    <div className="card bg-base-200 shadow-xl sticky top-[calc(100vh-400px)] z-10 mt-4">
      <div className="card-body p-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="card-title text-lg">
            Available Images ({images.length})
          </h3>
          <button
            onClick={() => {
              if (images.length > 0) {
                onImageSelect(images[0]);
                toast("Reset to first image");
              }
            }}
            className="btn btn-xs btn-ghost"
          >
            Reset Selection
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 max-h-36 overflow-y-auto">
          {images.map((img, index) => (
            <div
              key={index}
              className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all hover:scale-100 ${
                selectedImage === img
                  ? "border-primary shadow-lg"
                  : "border-base-300 hover:border-primary"
              }`}
              onClick={() => onImageSelect(img)}
              title={`Image ${index + 1}`}
            >
              <img
                src={img}
                alt={`Result ${index + 1}`}
                className="w-full h-32 object-cover"
                loading="lazy"
                onError={(e) => {
                  const target = e.target;
                  if (!target.src.includes("via.placeholder.com")) {
                    target.src = `https://via.placeholder.com/200x128/1f2937/9ca3af?text=${
                      index + 1
                    }`;
                    toast.error(`Failed to load image ${index + 1}`, {
                      duration: 2000,
                    });
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageThumbnails;
import React, { useRef } from "react";
import { toast } from "react-hot-toast";

const UploadCard = ({ onImageUpload }) => {
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check if file is an image
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    // Check file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast.error("File size must be less than 10MB");
      return;
    }

    // Read file as data URL
    const reader = new FileReader();
    reader.onload = (event) => {
      const imageUrl = event.target?.result;
      if (imageUrl) {
        onImageUpload(imageUrl);
        toast.success("Image uploaded successfully!", {
          position: "bottom-right",
          duration: 2000,
        });
      }
    };
    reader.onerror = () => {
      toast.error("Failed to read file");
    };
    reader.readAsDataURL(file);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="card bg-base-200 shadow-xl">
      <div className="card-body p-4">
        <h2 className="card-title text-lg">Upload Image</h2>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />
        <button
          onClick={handleClick}
          className="btn btn-primary w-full bg-base-100 hover:bg-base-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          Choose Image
        </button>
        <p className="text-xs text-base-content/60 text-center mt-2">
          Max 10MB, PNG/JPG/GIF
        </p>
      </div>
    </div>
  );
};

export default UploadCard;

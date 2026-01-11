import { toast } from "react-hot-toast";

export const showImageInfo = (selectedImage) => {
  toast.custom(
    (t) => (
      <div
        className={`bg-base-200 p-4 rounded-lg shadow-lg border border-base-300 ${
          t.visible ? "animate-enter" : "animate-leave"
        }`}
      >
        <p className="font-semibold">Current Image Info</p>
        <p className="text-xs mt-1 opacity-75 break-all">
          {selectedImage.substring(0, 80)}...
        </p>
        <button
          onClick={() => toast.dismiss(t.id)}
          className="btn btn-xs btn-ghost mt-2"
        >
          Close
        </button>
      </div>
    ),
    {
      duration: Infinity,
    }
  );
};
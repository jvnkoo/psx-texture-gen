import React from "react";

const Header = ({ onReset, onCopyUrl, selectedImage }) => {
  return (
    <nav className="navbar backdrop-blur-md bg-base-100/90 sticky top-0 z-50 border-b border-base-300/20 min-h-0">
      <div className="container mx-auto px-4 flex justify-between items-center py-3">
        <div className="text-xl font-mono font-bold tracking-widest text-base-content uppercase">
          <span className="text-rose-700 drop-shadow-[0_0_2px_#fda4af]">
            PS<span className="text-cyan-800">X</span>
          </span>
          <span className="text-gray-800 dark:text-gray-300">gen</span>
          <span className="text-red-700">_</span>
        </div>
        <div className="flex gap-2">
          <button onClick={onReset} className="btn btn-sm btn-ghost">
            Reset
          </button>
          <button
            onClick={onCopyUrl}
            disabled={!selectedImage}
            className="btn btn-sm btn-outline"
          >
            Copy URL
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
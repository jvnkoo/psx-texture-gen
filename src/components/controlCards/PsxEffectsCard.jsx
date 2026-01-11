import React from "react";
import { toast } from "react-hot-toast";

const PsxEffectsCard = ({
  vertexWobble,
  setVertexWobble,
  vertexIntensity,
  setVertexIntensity,
  texturePageSize,
  setTexturePageSize,
  subpixelArtifacts,
  setSubpixelArtifacts,
  subpixelIntensity,
  setSubpixelIntensity,
  perspectiveArtifacts,
  setPerspectiveArtifacts,
  perspectiveIntensity,
  setPerspectiveIntensity,
}) => {
  return (
    <div className="card bg-base-200 shadow-xl">
      <div className="card-body p-4">
        <h2 className="card-title text-base">PSX Effects</h2>

        <div className="flex items-center justify-between mb-2">
          <span className="text-sm">Vertex Wobble</span>
          <label className="cursor-pointer flex items-center gap-2">
            <input
              type="checkbox"
              checked={vertexWobble}
              onChange={(e) => {
                setVertexWobble(e.target.checked);
                if (e.target.checked) {
                  toast.success("Affine texture warping enabled");
                }
              }}
              className="toggle toggle-sm toggle-primary"
            />
          </label>
        </div>

        <div className="form-control mt-2">
          <label className="label">
            <span className="label-text">Texture Page Size</span>
            <span className="badge badge-neutral">{texturePageSize}</span>
          </label>
          <input
            type="range"
            min="0"
            max="512"
            step="16"
            value={texturePageSize}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              setTexturePageSize(value);
              if (value === 0) {
                toast("Texture page artifacts disabled");
              }
            }}
            className="range range-accent"
          />
          <div className="flex justify-between text-xs px-2 mt-1">
            <span>Off</span>
            <span>512px</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 mb-2">
          <span className="text-sm">Subpixel Artifacts</span>
          <label className="cursor-pointer flex items-center gap-2">
            <input
              type="checkbox"
              checked={subpixelArtifacts}
              onChange={(e) => {
                setSubpixelArtifacts(e.target.checked);
                if (e.target.checked) {
                  toast.success("Subpixel artifacts enabled");
                }
              }}
              className="toggle toggle-sm toggle-primary"
            />
          </label>
        </div>

        <div className="flex items-center justify-between mb-2">
          <span className="text-sm">Perspective Artifacts</span>
          <label className="cursor-pointer flex items-center gap-2">
            <input
              type="checkbox"
              checked={perspectiveArtifacts}
              onChange={(e) => {
                setPerspectiveArtifacts(e.target.checked);
                if (e.target.checked) {
                  toast.success("Perspective artifacts enabled");
                }
              }}
              className="toggle toggle-sm toggle-primary"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default PsxEffectsCard;
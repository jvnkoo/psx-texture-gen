import React from "react";
import CanvasImageEffects from "./CanvasImageEffects";

const ImageDisplay = ({
  selectedImage,
  noiseScale,
  pixelSize,
  dithering,
  ditherDepth,
  ditherIntensity,
  ditherType,
  rgbShift,
  rgbShiftAmount,
  vertexWobble,
  vertexIntensity,
  paletteSize,
  texturePageSize,
  subpixelArtifacts,
  subpixelIntensity,
  perspectiveArtifacts,
  perspectiveIntensity,
}) => {
  return (
    <div className="card bg-base-200 shadow-xl sticky top-24 z-20">
      <div className="card-body p-4">
        <div className="flex justify-center items-center">
          {selectedImage ? (
            <div className="relative w-full max-w-2xl mx-auto">
              <div
                className="relative w-full"
                style={{
                  width: "100%",
                  maxHeight: "70vh",
                  minHeight: "400px",
                  overflow: "hidden",
                  borderRadius: "0.5rem",
                  backgroundColor: "var(--fallback-b2,oklch(var(--b2)))",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <CanvasImageEffects
                    src={selectedImage}
                    noiseScale={noiseScale}
                    pixelSize={pixelSize}
                    maxWidth={800}
                    maxHeight={600}
                    dithering={dithering}
                    ditherDepth={ditherDepth}
                    ditherIntensity={ditherIntensity}
                    ditherType={ditherType}
                    rgbShift={rgbShift}
                    rgbShiftAmount={rgbShiftAmount}
                    vertexWobble={vertexWobble}
                    vertexIntensity={vertexIntensity}
                    paletteSize={paletteSize}
                    texturePageSize={texturePageSize}
                    subpixelArtifacts={subpixelArtifacts}
                    subpixelIntensity={subpixelIntensity}
                    perspectiveArtifacts={perspectiveArtifacts}
                    perspectiveIntensity={perspectiveIntensity}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      width: "auto",
                      height: "auto",
                      display: "block",
                    }}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full max-w-2xl h-[400px] bg-base-300 rounded-lg flex items-center justify-center mx-auto">
              <p className="text-base-content opacity-50 text-center">
                Search for an image to begin
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageDisplay;
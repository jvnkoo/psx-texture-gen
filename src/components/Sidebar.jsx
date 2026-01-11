import React from "react";
import SearchCard from "./controlCards/SearchCard";
import ControlCard from "./controlCards/ControlCard";
import RgbShiftCard from "./controlCards/RgbShiftCard";
import DitheringCard from "./controlCards/DitheringCard";
import ColorPaletteCard from "./controlCards/ColorPaletteCard";
import PsxEffectsCard from "./controlCards/PsxEffectsCard";
import InfoCard from "./controlCards/InfoCard";

const Sidebar = ({
  searchQuery,
  setSearchQuery,
  isLoading,
  handleSearch,
  noiseScale,
  setNoiseScale,
  pixelSize,
  setPixelSize,
  rgbShift,
  setRgbShift,
  rgbShiftAmount,
  setRgbShiftAmount,
  dithering,
  setDithering,
  ditherType,
  setDitherType,
  ditherDepth,
  setDitherDepth,
  ditherIntensity,
  setDitherIntensity,
  paletteSize,
  setPaletteSize,
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
  selectedImage,
}) => {
  return (
    <div className="lg:col-span-3 space-y-4">
      <SearchCard
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isLoading={isLoading}
        handleSearch={handleSearch}
      />

      <ControlCard
        noiseScale={noiseScale}
        setNoiseScale={setNoiseScale}
        pixelSize={pixelSize}
        setPixelSize={setPixelSize}
      />

      <RgbShiftCard
        rgbShift={rgbShift}
        setRgbShift={setRgbShift}
        rgbShiftAmount={rgbShiftAmount}
        setRgbShiftAmount={setRgbShiftAmount}
      />

      <DitheringCard
        dithering={dithering}
        setDithering={setDithering}
        ditherType={ditherType}
        setDitherType={setDitherType}
        ditherDepth={ditherDepth}
        setDitherDepth={setDitherDepth}
        ditherIntensity={ditherIntensity}
        setDitherIntensity={setDitherIntensity}
      />

      <ColorPaletteCard
        paletteSize={paletteSize}
        setPaletteSize={setPaletteSize}
      />

      <PsxEffectsCard
        vertexWobble={vertexWobble}
        setVertexWobble={setVertexWobble}
        vertexIntensity={vertexIntensity}
        setVertexIntensity={setVertexIntensity}
        texturePageSize={texturePageSize}
        setTexturePageSize={setTexturePageSize}
        subpixelArtifacts={subpixelArtifacts}
        setSubpixelArtifacts={setSubpixelArtifacts}
        subpixelIntensity={subpixelIntensity}
        setSubpixelIntensity={setSubpixelIntensity}
        perspectiveArtifacts={perspectiveArtifacts}
        setPerspectiveArtifacts={setPerspectiveArtifacts}
        perspectiveIntensity={perspectiveIntensity}
        setPerspectiveIntensity={setPerspectiveIntensity}
      />

      <InfoCard selectedImage={selectedImage} />
    </div>
  );
};

export default Sidebar;
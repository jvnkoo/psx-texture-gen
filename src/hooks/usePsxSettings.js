import { useState } from "react";
import { toast } from "react-hot-toast";

export const usePsxSettings = () => {
  const [noiseScale, setNoiseScale] = useState(0.0);
  const [pixelSize, setPixelSize] = useState(10);
  const [dithering, setDithering] = useState(false);
  const [ditherDepth, setDitherDepth] = useState(32);
  const [ditherIntensity, setDitherIntensity] = useState(1.0);
  const [ditherType, setDitherType] = useState("bayer");
  const [rgbShift, setRgbShift] = useState(false);
  const [rgbShiftAmount, setRgbShiftAmount] = useState(5);
  const [vertexWobble, setVertexWobble] = useState(false);
  const [vertexIntensity, setVertexIntensity] = useState(0.015);
  const [paletteSize, setPaletteSize] = useState(256);
  const [texturePageSize, setTexturePageSize] = useState(128);
  const [subpixelArtifacts, setSubpixelArtifacts] = useState(false);
  const [subpixelIntensity, setSubpixelIntensity] = useState(0.3);
  const [perspectiveArtifacts, setPerspectiveArtifacts] = useState(false);
  const [perspectiveIntensity, setPerspectiveIntensity] = useState(0.2);

  const resetToDefault = () => {
    setNoiseScale(0.005);
    setPixelSize(10);
    setDithering(false);
    setDitherType("bayer");
    setRgbShift(false);
    setRgbShiftAmount(3);
    setVertexWobble(false);
    setVertexIntensity(0.015);
    setPaletteSize(256);
    setTexturePageSize(128);
    setSubpixelArtifacts(false);
    setSubpixelIntensity(0.3);
    setPerspectiveArtifacts(false);
    setPerspectiveIntensity(0.2);
    toast.success("Settings reset to default PSX preset");
  };

  return {
    noiseScale,
    setNoiseScale,
    pixelSize,
    setPixelSize,
    dithering,
    setDithering,
    ditherDepth,
    setDitherDepth,
    ditherIntensity,
    setDitherIntensity,
    ditherType,
    setDitherType,
    rgbShift,
    setRgbShift,
    rgbShiftAmount,
    setRgbShiftAmount,
    vertexWobble,
    setVertexWobble,
    vertexIntensity,
    setVertexIntensity,
    paletteSize,
    setPaletteSize,
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
    resetToDefault,
  };
};
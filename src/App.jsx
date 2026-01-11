import React from "react";
import { Toaster } from "react-hot-toast";

// Hooks
import { usePsxSettings } from "./hooks/usePsxSettings";
import { useImageSearch } from "./hooks/useImageSearch";

// Components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ImageDisplay from "./components/ImageDisplay";
import ImageThumbnails from "./components/ImageThumbnails";

const App = () => {
  // Custom hooks for state management
  const psxSettings = usePsxSettings();
  const imageSearch = useImageSearch();

  return (
    <div className="min-h-screen bg-base-300 p-4">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
        }}
      />

      <div className="container mx-auto max-w-7xl">
        <Header
          onReset={psxSettings.resetToDefault}
          onCopyUrl={imageSearch.handleCopyImageUrl}
          selectedImage={imageSearch.selectedImage}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <Sidebar
            // Search props
            searchQuery={imageSearch.searchQuery}
            setSearchQuery={imageSearch.setSearchQuery}
            isLoading={imageSearch.isLoading}
            handleSearch={imageSearch.handleSearch}
            // PSX settings props
            noiseScale={psxSettings.noiseScale}
            setNoiseScale={psxSettings.setNoiseScale}
            pixelSize={psxSettings.pixelSize}
            setPixelSize={psxSettings.setPixelSize}
            rgbShift={psxSettings.rgbShift}
            setRgbShift={psxSettings.setRgbShift}
            rgbShiftAmount={psxSettings.rgbShiftAmount}
            setRgbShiftAmount={psxSettings.setRgbShiftAmount}
            dithering={psxSettings.dithering}
            setDithering={psxSettings.setDithering}
            ditherType={psxSettings.ditherType}
            setDitherType={psxSettings.setDitherType}
            ditherDepth={psxSettings.ditherDepth}
            setDitherDepth={psxSettings.setDitherDepth}
            ditherIntensity={psxSettings.ditherIntensity}
            setDitherIntensity={psxSettings.setDitherIntensity}
            paletteSize={psxSettings.paletteSize}
            setPaletteSize={psxSettings.setPaletteSize}
            vertexWobble={psxSettings.vertexWobble}
            setVertexWobble={psxSettings.setVertexWobble}
            vertexIntensity={psxSettings.vertexIntensity}
            setVertexIntensity={psxSettings.setVertexIntensity}
            texturePageSize={psxSettings.texturePageSize}
            setTexturePageSize={psxSettings.setTexturePageSize}
            subpixelArtifacts={psxSettings.subpixelArtifacts}
            setSubpixelArtifacts={psxSettings.setSubpixelArtifacts}
            subpixelIntensity={psxSettings.subpixelIntensity}
            setSubpixelIntensity={psxSettings.setSubpixelIntensity}
            perspectiveArtifacts={psxSettings.perspectiveArtifacts}
            setPerspectiveArtifacts={psxSettings.setPerspectiveArtifacts}
            perspectiveIntensity={psxSettings.perspectiveIntensity}
            setPerspectiveIntensity={psxSettings.setPerspectiveIntensity}
            // Other props
            selectedImage={imageSearch.selectedImage}
          />

          <div className="lg:col-span-9 space-y-6">
            <ImageDisplay
              selectedImage={imageSearch.selectedImage}
              // PSX settings for image processing
              noiseScale={psxSettings.noiseScale}
              pixelSize={psxSettings.pixelSize}
              dithering={psxSettings.dithering}
              ditherDepth={psxSettings.ditherDepth}
              ditherIntensity={psxSettings.ditherIntensity}
              ditherType={psxSettings.ditherType}
              rgbShift={psxSettings.rgbShift}
              rgbShiftAmount={psxSettings.rgbShiftAmount}
              vertexWobble={psxSettings.vertexWobble}
              vertexIntensity={psxSettings.vertexIntensity}
              paletteSize={psxSettings.paletteSize}
              texturePageSize={psxSettings.texturePageSize}
              subpixelArtifacts={psxSettings.subpixelArtifacts}
              subpixelIntensity={psxSettings.subpixelIntensity}
              perspectiveArtifacts={psxSettings.perspectiveArtifacts}
              perspectiveIntensity={psxSettings.perspectiveIntensity}
            />

            <ImageThumbnails
              images={imageSearch.images}
              selectedImage={imageSearch.selectedImage}
              onImageSelect={imageSearch.handleImageSelect}
              onReset={() => {
                if (imageSearch.images.length > 0) {
                  imageSearch.handleImageSelect(imageSearch.images[0]);
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
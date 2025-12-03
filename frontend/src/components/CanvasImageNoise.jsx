import React, { useEffect, useRef } from "react";
import { createNoise2D } from "simplex-noise";

export default function CanvasImage({
  src,
  noiseScale = 0.01,
  maxWidth,
  maxHeight,
}) {
  // Reference to access the canvas DOM element
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Exit if canvas isn't available

    const ctx = canvas.getContext("2d");
    const noise2D = createNoise2D(); // Create 2D noise generator
    const img = new Image(); // Create new image object
    img.crossOrigin = "anonymous"; // For external images

    // Set image source and handle loading
    img.src = src;
    img.onload = () => {
      let width = img.width;
      let height = img.height;

      // Apply max constraints if provided
      if (maxWidth && width > maxWidth) {
        const ratio = maxWidth / width;
        width = maxWidth;
        height = height * ratio;
      }

      if (maxHeight && height > maxHeight) {
        const ratio = maxHeight / height;
        height = maxHeight;
        width = width * ratio;
      }

      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);

      // Get pixel data from canvas for manipulation
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data; // RGBA pixel array
      const opacity = 0.5; // Noise blending strength (0-1)

      // Loop through each pixel (4 elements per pixel: R, G, B, A)
      for (let i = 0; i < pixels.length; i += 4) {
        // Calculate x,y coordinates from pixel index
        const x = (i / 4) % canvas.width;
        const y = Math.floor(i / 4 / canvas.width);

        // Generate noise value (-1 to 1) and convert to grayscale (0-255)
        const noise = noise2D(x * noiseScale, y * noiseScale);
        const color = Math.floor((noise + 1) * 128);

        // Blend noise with original pixel colors
        // Red channel
        pixels[i] = pixels[i] * (1 - opacity) + color * opacity;
        // Green channel
        pixels[i + 1] = pixels[i + 1] * (1 - opacity) + color * opacity;
        // Blue channel
        pixels[i + 2] = pixels[i + 2] * (1 - opacity) + color * opacity;
        // Alpha channel remains unchanged
      }

      // Write modified pixel data back to canvas
      ctx.putImageData(imageData, 0, 0);
    };

    img.onerror = () => {
      console.error("Error loading image:", src);
    };
  }, [src, noiseScale, maxWidth, maxHeight]); // Re-run effect when src or noiseScale changes

  // Render canvas element with ref attachment
  return src ? <canvas ref={canvasRef} /> : null;
}

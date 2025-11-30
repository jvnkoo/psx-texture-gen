import React, { useEffect, useRef } from "react";

// Simple component that draws an image on a canvas
export default function CanvasImage({ src }) {
  // useRef gives us a reference to the canvas DOM element
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current; // get the canvas element
    const ctx = canvas.getContext("2d"); // get 2d drawing context

    const img = new Image(); // create new image object
    img.src = src; // set source of the image

    // when the image loads, draw it on the canvas
    img.onload = () => {
      // optional: resize canvas to image size
      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0); // draw image at top-left corner
    };
  }, [src]); // run effect whenever the image src changes

  return <canvas ref={canvasRef} className="border" />; // simple border to see the canvas
}

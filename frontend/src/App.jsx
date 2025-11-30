import CanvasImage from "./CanvasImage";

// path to your image in /public folder
const imagePath = "/photo_2025-11-30_02-12-58.jpg";

export default function App() {
  return (
    <div className="p-4">
      <h1 className="text-xl mb-2 text-center">Canvas Image</h1>
      <div className="flex justify-center items-center border py-2 px-2 w-max mx-auto">
        <CanvasImage src={imagePath} />
      </div>
    </div>
  );
}

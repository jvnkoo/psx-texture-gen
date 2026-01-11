import { useState } from "react";
import { searchWikimediaImages, getFallbackImages } from "../utils/ImageSearch";
import { toast } from "react-hot-toast";

export const useImageSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [useFallback, setUseFallback] = useState(false);

  const handleSearch = async (e) => {
    e?.preventDefault();
    if (!searchQuery.trim()) {
      toast.error("Please enter a search query");
      return;
    }

    setIsLoading(true);
    setUseFallback(false);

    const loadingToast = toast.loading(`Searching for "${searchQuery}"...`);

    try {
      const imageUrls = await searchWikimediaImages(searchQuery, 0);

      if (imageUrls.length > 0) {
        setImages(imageUrls);
        setSelectedImage(imageUrls[0]);
        toast.success(`Found ${imageUrls.length} images`, {
          id: loadingToast,
        });
      } else {
        const fallbackImages = getFallbackImages(searchQuery);
        setImages(fallbackImages);
        setUseFallback(true);
        setSelectedImage(fallbackImages[0] || null);
        toast.warning("No images found. Showing demo images", {
          id: loadingToast,
        });
      }
    } catch (error) {
      console.error("Search error:", error);
      const fallbackImages = getFallbackImages(searchQuery);
      setImages(fallbackImages);
      setUseFallback(true);
      setSelectedImage(fallbackImages[0] || null);
      toast.error("Search failed. Showing demo images", {
        id: loadingToast,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageSelect = (img) => {
    setSelectedImage(img);
    toast.success("Image selected", {
      duration: 1500,
      position: "bottom-right",
    });
  };

  const handleCopyImageUrl = () => {
    if (selectedImage) {
      navigator.clipboard.writeText(selectedImage);
      toast.success("Image URL copied to clipboard!", {
        position: "bottom-right",
      });
    }
  };

  return {
    searchQuery,
    setSearchQuery,
    isLoading,
    images,
    selectedImage,
    useFallback,
    handleSearch,
    handleImageSelect,
    handleCopyImageUrl,
  };
};
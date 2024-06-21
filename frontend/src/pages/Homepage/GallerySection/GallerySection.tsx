import React from "react";
import MasonryGallery from "../../../components/MasonryGallery/MasonryGallery";
import "./gallerySection.scss";

const imagePaths: string[] = [];
Object.values(
  import.meta.glob("../../../assets/gallery/*", { eager: true })
).forEach(({ default: path }: any) => {
  const url = new URL(path, import.meta.url);
  const data = {
    path: url.pathname,
  };
  imagePaths.push(data.path);
});

const GallerySection = () => {
  return (
    <div className="gallery">
      <MasonryGallery images={imagePaths} />
    </div>
  );
};

export default GallerySection;

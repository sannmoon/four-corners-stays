import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./masonryGallery.scss";

type Props = {
  images: string[];
};

function MasonryGallery({ images }: Props) {
  const items = images.map((image, index) => (
    <img className="imageMasonry" key={index} src={image} />
  ));

  return (
    <div className="masonryGallery">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 300: 2, 500: 3, 700: 4, 900: 6 }} //300 pixels we have 2 columns
      >
        <Masonry>{items}</Masonry>
      </ResponsiveMasonry>
    </div>
  );
}
export default MasonryGallery;

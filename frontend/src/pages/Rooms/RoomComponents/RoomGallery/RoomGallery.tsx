import React, { useEffect, useRef, useState } from "react";
import "./roomGallery.scss";
import arrow from "../../../../assets/arrow.png";

type Props = {
  images: string[];
};

function RoomGallery({ images }: Props) {
  const [imageIndex, setImageIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const changeSlide = (direction: string) => {
    if (imageIndex === null) {
      return; // when imageIndex is null, we dont wanna change Slide
    }

    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    } else {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }
  };

  const handleCloseSlider = () => {
    setImageIndex(null);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (imageIndex === null) {
        return; // when imageIndex is null, we dont want to handleKeyDown, nth happens
      }

      if (event.key === "ArrowLeft") {
        changeSlide("left");
      } else if (event.key === "ArrowRight") {
        changeSlide("right");
      }
    };

    const handleClickOutside = (event: any) => {
      const clickedElement = event.target;
      if (
        ref.current?.contains(clickedElement) &&
        clickedElement === ref.current
      ) {
        setImageIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [imageIndex]);

  return (
    <div className="roomGallery">
      {imageIndex !== null && (
        <div className="fullSlider" ref={ref}>
          <div className="arrow" onClick={() => changeSlide("left")}>
            <img src={arrow} alt="left arrow" />
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt="images" />
          </div>
          <div className="arrow">
            <img
              src={arrow}
              className="right"
              alt="right arrow"
              onClick={() => changeSlide("right")}
            />
          </div>
          <div
            className="close"
            onClick={() => {
              handleCloseSlider();
            }}
          >
            X
          </div>
        </div>
      )}
      <div className="mainImage">
        <img
          src={images[0]}
          alt="main image"
          onClick={() => setImageIndex(0)}
        />
      </div>
      <div className="imagesGallery">
        {images.slice(1).map((image, index) => (
          <img
            onClick={() => setImageIndex(index + 1)}
            src={image}
            alt="room images"
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default RoomGallery;

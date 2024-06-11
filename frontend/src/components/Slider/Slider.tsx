import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SliderItem from "./SliderItem/SliderItem";
import "./slider.scss";
import React, { Component } from "react";

type Item = {
  image: string;
  title: string;
  subtitle: string;
};

type Props = {
  items: Item[];
};

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function SimpleSlider({ items }) {
  return (
    <Carousel
      swipeable
      draggable
      keyBoardControl={true}
      responsive={responsive}
      className="slider"
    >
      {items.map((item) => (
        <SliderItem
          image={item.image}
          title={item.title}
          subtitle={item.subtitle}
        />
      ))}
    </Carousel>
  );
}

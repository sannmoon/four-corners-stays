import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./slider.scss";
import { PropsWithChildren } from "react";

type Item = {
  image: string;
  title: string;
  subtitle: string;
};

type Props = {
  responsive?: Record<
    string,
    {
      breakpoint: { max: number; min: number };
      items: number;
    }
  >;
};

export default function SimpleSlider({
  responsive,
  children,
}: PropsWithChildren<Props>) {
  const responsiveOptions = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
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
    ...responsive,
  };

  return (
    <Carousel
      swipeable
      draggable
      keyBoardControl={true}
      responsive={responsiveOptions}
      className="slider"
    >
      {children}
    </Carousel>
  );
}

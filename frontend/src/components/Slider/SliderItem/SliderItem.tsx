import React from "react";
import "./sliderItem.scss";

type Props = {
  image: string;
  title: string;
  subtitle: string;
};

function SliderItem({ image, title, subtitle }: Props) {
  return (
    <div className="sliderItem">
      <img src={image} />
      <h1 className="sliderTitle">{title}</h1>
      <h2 className="sliderSubtitle">{subtitle}</h2>
    </div>
  );
}

export default SliderItem;

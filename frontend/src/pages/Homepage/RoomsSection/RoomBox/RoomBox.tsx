import React from "react";
import "./roomBox.scss";

type Props = {
  image: string;
  title: string;
  subtitle: string;
};

export default function RoomBox({ image, title, subtitle }: Props) {
  return (
    <div className="roomBox">
      <img src={image} />
      <h1 className="roomBoxTitle">{title}</h1>
      <h2 className="roomBoxSubtitle">{subtitle}</h2>
    </div>
  );
}

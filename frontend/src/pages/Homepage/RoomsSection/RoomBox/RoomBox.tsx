import React from "react";
import "./roomBox.scss";
import { Link } from "react-router-dom";

type Props = {
  image: string;
  title: string;
  subtitle: string;
  onClick: () => void;
};

export default function RoomBox({ image, title, subtitle, onClick }: Props) {
  return (
    <div className="roomBox" onClick={onClick}>
      <img src={image} />
      <h1 className="roomBoxTitle">{title}</h1>
      <h2 className="roomBoxSubtitle">{subtitle}</h2>
    </div>
  );
}

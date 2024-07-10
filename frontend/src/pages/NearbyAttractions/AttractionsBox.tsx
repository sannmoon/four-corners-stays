import React from "react";
import "./attractionsBox.scss";
import { useTranslation } from "react-i18next";

type Props = {
  image: string;
  title: string;
  description: string;
  link: string;
};

function AttractionsBox({ image, title, description, link }: Props) {
  const { t } = useTranslation();
  return (
    <div className="attractionsBox">
      <div className="attractionsBoxImage">
        <img src={image} alt="Tourist Attractions" />
      </div>
      <div className="attractionsBoxContent">
        <h2 className="attractionsBoxTitle">{title}</h2>
        <p className="attractionsBoxSub">{description}</p>
        <a href={link} className="btn" target="blank">
          {t("explore_now")}
        </a>
      </div>
    </div>
  );
}

export default AttractionsBox;

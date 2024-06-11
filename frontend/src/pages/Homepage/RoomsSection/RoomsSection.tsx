import "./roomsSection.scss";
import Slider from "../../../components/Slider/Slider";
import React from "react";
import { useTranslation } from "react-i18next";
import Sunny from "../../../assets/Sunny.jpeg";
import BlueSerenity from "../../../assets/BlueSerenity.jpg";
import Loft from "../../../assets/Loft.jpeg";
import Boho from "../../../assets/Boho.jpeg";

function RoomsSection() {
  const { t } = useTranslation();

  const items = [
    {
      image: Sunny,
      title: t("rooms_sunny_title"),
      subtitle: t("rooms_sunny_subtitle"),
    },
    {
      image: BlueSerenity,
      title: t("blue_title"),
      subtitle: t("blue_subtitle"),
    },
    {
      image: Boho,
      title: t("boho_title"),
      subtitle: t("boho_subtitle"),
    },
    {
      image: Loft,
      title: t("loft_title"),
      subtitle: t("loft_subtitle"),
    },
  ];

  return (
    <div className="roomsSection">
      <div className="roomHeader">
        <h1 className="roomsTitle">{t("rooms_title")}</h1>
        <h2 className="roomsSubtitle">{t("rooms_subtitle")}</h2>
      </div>
      <div className="roomCards">
        <Slider items={items} />
      </div>
    </div>
  );
}

export default RoomsSection;

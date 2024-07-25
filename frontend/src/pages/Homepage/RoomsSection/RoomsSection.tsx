import "./roomsSection.scss";
import Slider from "../../../components/Slider/Slider";
import React from "react";
import { useTranslation } from "react-i18next";
import Sunny from "../../../assets/gallery/Sunny.jpeg";
import BlueSerenity from "../../../assets/gallery/BlueSerenity.jpg";
import Loft from "../../../assets/gallery/Loft.jpeg";
import Boho from "../../../assets/gallery/Boho.jpeg";
import RoomBox from "./RoomBox/RoomBox";
import { useNavigate } from "react-router-dom";

function RoomsSection() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const items = [
    {
      image: Sunny,
      title: t("rooms_sunny_title"),
      subtitle: t("rooms_sunny_subtitle"),
      tab: "sunny",
    },
    {
      image: BlueSerenity,
      title: t("blue_title"),
      subtitle: t("blue_subtitle"),
      tab: "blue",
    },
    {
      image: Boho,
      title: t("boho_title"),
      subtitle: t("boho_subtitle"),
      tab: "boho",
    },
    {
      image: Loft,
      title: t("loft_title"),
      subtitle: t("loft_subtitle"),
      tab: "loft",
    },
  ];

  const handleRoomClick = (tab: string) => {
    navigate({ pathname: "/rooms", search: `?tab=${tab}` });
  };

  return (
    <div className="roomsSection">
      <div className="roomHeader">
        <h1 className="roomsTitle">{t("rooms_title")}</h1>
        <h2 className="roomsSubtitle">{t("rooms_subtitle")}</h2>
      </div>
      <div className="roomCards">
        {items.map((item) => (
          <RoomBox
            key={item.tab}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            onClick={() => handleRoomClick(item.tab)}
          />
        ))}
      </div>
    </div>
  );
}

export default RoomsSection;

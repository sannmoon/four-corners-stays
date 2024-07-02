import React from "react";
import RoomBody from "../RoomComponents/RoomBody/RoomBody";
import BlueSerenity from "../../../assets/gallery/BlueSerenity.jpg";
import BlueSerenity2 from "../../../assets/gallery/BlueSerenity2.jpg";
import BlueSerenity3 from "../../../assets/gallery/BlueSerenity3.jpeg";
import BlueSerenity5 from "../../../assets/gallery/BlueSerenity5.jpeg";
import BlueSerenity6 from "../../../assets/gallery/BlueSerenity6.jpeg";
import BlueSerenity7 from "../../../assets/gallery/BlueSerenity7.jpeg";
import BlueSerenity8 from "../../../assets/gallery/BlueSerenity8.jpeg";
import BlueSerenity9 from "../../../assets/gallery/BlueSerenity9.jpeg";
import BlueSerenity10 from "../../../assets/gallery/BlueSerenity10.jpeg";
import BlueSerenity11 from "../../../assets/gallery/BlueSerenity11.jpeg";
import BlueSerenity12 from "../../../assets/gallery/BlueSerenity12.jpeg";
import RoomGallery from "../RoomComponents/RoomGallery/RoomGallery";
import { useTranslation } from "react-i18next";

function BlueRoom() {
  const { t } = useTranslation();

  const images = [
    BlueSerenity,
    BlueSerenity2,
    BlueSerenity3,
    BlueSerenity5,
    BlueSerenity6,
    BlueSerenity7,
    BlueSerenity8,
    BlueSerenity9,
    BlueSerenity10,
    BlueSerenity11,
  ];

  return (
    <div>
      <RoomGallery images={images} />
      <RoomBody
        title={t("blue_title")}
        description={t("blue_desc")}
        roomSize="18 m²"
        beds={[t("queen_bed"), t("bunk_bed")]}
        amenities={[
          t("amenities10"),
          t("amenities1"),
          t("amenities2"),
          t("amenities3"),
          t("amenities4"),
          t("amenities5"),
          t("amenities6"),
          t("amenities7"),
          t("amenities8"),
          t("amenities9"),
        ]}
        occupancy={[t("adults_occupancy"), t("children_occupancy")]}
      />
    </div>
  );
}

export default BlueRoom;

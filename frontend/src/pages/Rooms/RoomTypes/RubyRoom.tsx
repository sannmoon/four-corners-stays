import React from "react";
import RoomBody from "../RoomComponents/RoomBody/RoomBody";
import Loft from "../../../assets/gallery/Loft.jpeg";
import Loft2 from "../../../assets/gallery/Loft2.jpeg";
import Loft3 from "../../../assets/gallery/Loft3.jpeg";
import Loft4 from "../../../assets/gallery/Loft4.jpg";
import Loft5 from "../../../assets/gallery/Loft5.jpeg";
import Loft6 from "../../../assets/gallery/Loft6.jpeg";
import Loft7 from "../../../assets/gallery/Loft7.jpeg";
import Loft10 from "../../../assets/gallery/Loft10.jpeg";
import Loft11 from "../../../assets/gallery/Loft11.jpeg";
import Loft12 from "../../../assets/gallery/Loft12.jpeg";
import RoomGallery from "../RoomComponents/RoomGallery/RoomGallery";
import { useTranslation } from "react-i18next";

function RubyRoom() {
  const { t } = useTranslation();

  const images = [
    Loft,
    Loft2,
    Loft3,
    Loft4,
    Loft5,
    Loft6,
    Loft7,
    Loft10,
    Loft11,
    Loft12,
  ];

  return (
    <div>
      <RoomGallery images={images} />
      <RoomBody
        title={t("loft_title")}
        description={t("ruby_desc")}
        roomSize="15 m²"
        beds={[t("queen_bed"), t("sofa_bed")]}
        amenities={[
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
        occupancy={[t("adults_occupancy"), t("child_occupancy")]}
      />
    </div>
  );
}

export default RubyRoom;

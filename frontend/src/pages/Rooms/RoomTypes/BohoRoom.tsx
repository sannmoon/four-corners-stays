import React from "react";
import RoomBody from "../RoomComponents/RoomBody/RoomBody";
import Boho from "../../../assets/gallery/Boho.jpeg";
import Boho2 from "../../../assets/gallery/Boho2.jpeg";
import Boho3 from "../../../assets/gallery/Boho3.jpeg";
import Boho4 from "../../../assets/gallery/Boho4.jpeg";
import Boho5 from "../../../assets/gallery/Boho5.jpeg";
import Boho6 from "../../../assets/gallery/Boho6.jpeg";
import RoomGallery from "../RoomComponents/RoomGallery/RoomGallery";
import { useTranslation } from "react-i18next";

function BohoRoom() {
  const images = [Boho, Boho2, Boho3, Boho4, Boho5, Boho6];

  const { t } = useTranslation();

  return (
    <div>
      <RoomGallery images={images} />
      <RoomBody
        title={"Boho"}
        description={t("boho_desc")}
        roomSize={"21 m²"}
        amenities={[
          t("amenities1"),
          t("amenities2"),
          t("amenities3"),
          t("amenities4"),
          t("amenities5"),
          t("amenities6"),
          t("amenities7"),
          t("amenities10"),
          t("amenities8"),
        ]}
        beds={[t("queen_bed"), t("single_beds")]}
        occupancy={[t("adults_occupancy"), t("children_occupancy")]}
      />
    </div>
  );
}

export default BohoRoom;

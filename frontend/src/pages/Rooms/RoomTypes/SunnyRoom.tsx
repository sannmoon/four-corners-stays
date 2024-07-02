import React from "react";
import RoomBody from "../RoomComponents/RoomBody/RoomBody";
import Sunny from "../../../assets/gallery/Sunny.jpeg";
import Sunny5 from "../../../assets/gallery/Sunny5.jpg";
import Sunny2 from "../../../assets/gallery/Sunny2.jpeg";
import Sunny3 from "../../../assets/gallery/Sunny3.jpg";
import Sunny4 from "../../../assets/gallery/Sunny4.jpeg";
import Sunny7 from "../../../assets/gallery/Sunny7.jpeg";
import RoomGallery from "../RoomComponents/RoomGallery/RoomGallery";
import BedroomParentOutlinedIcon from "@mui/icons-material/BedroomParentOutlined";
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import YardOutlinedIcon from "@mui/icons-material/YardOutlined";
import KingBedOutlinedIcon from "@mui/icons-material/KingBedOutlined";
import BedroomChildOutlinedIcon from "@mui/icons-material/BedroomChildOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import { useTranslation } from "react-i18next";

function SunnyRoom() {
  const { t } = useTranslation();
  const images = [Sunny, Sunny5, Sunny2, Sunny3, Sunny4, Sunny7];

  return (
    <div>
      <RoomGallery images={images} />
      <RoomBody
        title={t("sunny_title")}
        description={t("sunny_desc")}
        roomSize="11 m²"
        beds={[t("single_beds")]}
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
        occupancy={[t("children_occupancy")]}
      />
    </div>
  );
}

export default SunnyRoom;

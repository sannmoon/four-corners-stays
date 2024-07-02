import React from "react";
import "./roomBody.scss";
import { useTranslation } from "react-i18next";
import RoomDetails from "./RoomDetails/RoomDetails";

type Props = {
  title: string;
  description: string;
  roomSize: string;
  amenities: string[];
  beds: string[];
  occupancy: string[];
};

function RoomBody({
  title,
  description,
  roomSize,
  amenities,
  beds,
  occupancy,
}: Props) {
  const { t } = useTranslation();

  return (
    <div className="roomBody">
      <div className="titleRoomBody">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="detailsRoomBody">
        <RoomDetails header={t("amenities")} list={amenities} />
        <RoomDetails header={t("beds")} list={beds} />
        <RoomDetails header={t("room_size")} list={[roomSize]} />
        <RoomDetails header={t("occupancy")} list={occupancy} />
      </div>
    </div>
  );
}

export default RoomBody;

/* ROOM BODY DETAILS SPACING BETWEEN IS TOO BIG */

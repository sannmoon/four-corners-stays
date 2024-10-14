import React from "react";
import { useTranslation } from "react-i18next";
import "./roomDetails.scss";

type Props = {
  header: string;
  list: string[];
};

function RoomDetails({ header, list }: Props) {
  return (
    <div className="roomDetails">
      <h2>{header}</h2>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default RoomDetails;

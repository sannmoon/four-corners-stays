import React from "react";
import { useTranslation } from "react-i18next";

type Props = {
  header: string;
  list: string[];
};

function RoomDetails({ header, list }: Props) {
  return (
    <div>
      <h2>{header}</h2>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default RoomDetails;

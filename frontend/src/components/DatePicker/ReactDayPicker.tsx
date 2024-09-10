import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

type Props = {
  selected: any;
  onSelect: (e: any) => void;
  modifiers: Record<string, any[]>;
};

export default function ReactDayPicker({
  selected,
  modifiers,
  onSelect,
}: Props) {
  return (
    <DayPicker
      mode="range"
      selected={selected}
      onSelect={onSelect}
      modifiers={modifiers}
    />
  );
}

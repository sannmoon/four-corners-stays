import React from "react";
import "./infoBox.scss";

type Props = {
  icon: React.ReactElement;
  name: string;
  description: string;
};

function Services({ icon, name, description }: Props) {
  return (
    <div className="infoBox">
      <div className="infoBoxIcon">{icon}</div>
      <div className="infoBoxContent">
        <h2 className="infoBoxTitle">{name}</h2>
        <p className="infoBoxSubtitle">{description}</p>
      </div>
    </div>
  );
}
export default Services;

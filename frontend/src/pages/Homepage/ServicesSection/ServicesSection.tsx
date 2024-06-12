import React from "react";
import "./servicesSection.scss";
import { useTranslation } from "react-i18next";
import InfoBox from "../../../components/InfoBox/InfoBox";
import NoteAddSharpIcon from "@mui/icons-material/NoteAddSharp";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import Countertops from "@mui/icons-material/Countertops";
// import FireplaceIcon from "@mui/icons-material/Fireplace"; 🚨pick
// import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill"; 🚨pick
import DeckIcon from "@mui/icons-material/Deck";
import WifiIcon from "@mui/icons-material/Wifi";
import DriveEtaIcon from "@mui/icons-material/DriveEta";

function ServicesSection() {
  const { t } = useTranslation();

  return (
    <div className="servicesSection">
      <h1 className="servicesTitle">{t("services_title")}</h1>
      <div className="topSection">
        <InfoBox
          icon={<NoteAddSharpIcon />}
          name={t("games")}
          description={t("games_desc")}
        />
        <InfoBox
          icon={<LocalCafeIcon />}
          name={t("drinks")}
          description={t("drinks_desc")}
        />
        <InfoBox
          icon={<Countertops />}
          name={t("kitchen")}
          description={t("kitchen_desc")}
        />
      </div>
      <div className="bottomSection">
        <InfoBox
          icon={<DeckIcon />}
          name={t("lawn")}
          description={t("lawn_desc")}
        />
        <InfoBox
          icon={<WifiIcon />}
          name={t("wifi")}
          description={t("wifi_desc")}
        />
        <InfoBox
          icon={<DriveEtaIcon />}
          name={t("parking")}
          description={t("parking_desc")}
        />
      </div>
    </div>
  );
}

export default ServicesSection;

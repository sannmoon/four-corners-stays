import { useState } from "react";
import "./room.scss";
import SunnyRoom from "./RoomTypes/SunnyRoom";
import BlueRoom from "./RoomTypes/BlueRoom";
import BohoRoom from "./RoomTypes/BohoRoom";
import RubyRoom from "./RoomTypes/RubyRoom";
import { useTranslation } from "react-i18next";
import PageContainer from "../../components/PageContainer/PageContainer";
import PhoneIcon from "@mui/icons-material/Phone";
import { useSearchParams } from "react-router-dom";

function Rooms() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const queryParamTab = searchParams.get("tab");

  const [selectedTab, setSelectedTab] = useState(queryParamTab ?? "sunny");

  return (
    <PageContainer>
      <div className="rooms">
        <div className="tabs">
          <div
            className={selectedTab === "sunny" ? "active" : ""}
            onClick={() => setSelectedTab("sunny")}
          >
            {t("rooms_sunny_title")}
          </div>
          <div
            className={selectedTab === "blue" ? "active" : ""}
            onClick={() => setSelectedTab("blue")}
          >
            {t("blue_title")}
          </div>
          <div
            className={selectedTab === "boho" ? "active" : ""}
            onClick={() => setSelectedTab("boho")}
          >
            {t("boho_title")}
          </div>
          <div
            className={selectedTab === "loft" ? "active" : ""}
            onClick={() => setSelectedTab("loft")}
          >
            {t("loft_title")}
          </div>
        </div>
        <div className="body">
          {selectedTab === "sunny" && <SunnyRoom />}
          {selectedTab === "blue" && <BlueRoom />}
          {selectedTab === "boho" && <BohoRoom />}
          {selectedTab === "loft" && <RubyRoom />}
        </div>
        <div className="footerRooms">
          <h2>{t("contact_rooms")}</h2>
          <p>{t("booking_info")}</p>
          <div className="bookingInfo">
            <PhoneIcon className="phoneIconRooms" />
            +48 {import.meta.env.VITE_PHONE_NUMBER}
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

export default Rooms;

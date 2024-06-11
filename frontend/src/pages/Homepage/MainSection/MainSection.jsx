import "./mainSection.scss";
import Bedroom3 from "../../../assets/Bedroom3.jpg";
import { useTranslation } from "react-i18next";

function MainSection() {
  const { t } = useTranslation();

  return (
    <div
      className="mainSection"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${Bedroom3}) 0px / cover no-repeat`,
      }}
    >
      <div className="pageHeader">
        <h2>{t("homepage_subtitle")}</h2>
        <h1>{t("homepage_title")}</h1>
        <p>{t("homepage_desc")}</p>
        <button>{t("homepage_contact")}</button>
      </div>
    </div>
  );
}

export default MainSection;

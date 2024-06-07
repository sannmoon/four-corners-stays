import "./Homepage.scss";
import bgSection1 from "../../assets/bgSection1.jpg";
import { useTranslation } from "react-i18next";

function Homepage() {
  const { t } = useTranslation();

  return (
    <div className="homepage">
      <div
        className="sectionOne"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bgSection1})`,
        }}
      >
        <div className="pageHeader">
          <h2>{t("homepage_subtitle")}</h2>
          <h1>{t("homepage_title")}</h1>
          <p>{t("homepage_desc")}</p>
          <button>{t("homepage_contact")}</button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;

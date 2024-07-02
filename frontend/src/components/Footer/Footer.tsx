import React from "react";
import "./footer.scss";
import logo from "../../assets/logo.png";
import airbnb from "../../assets/airbnb.svg";
import booking from "../../assets/booking.svg";
import fb from "../../assets/fb.svg";
import { useTranslation } from "react-i18next";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  const { t } = useTranslation();
  return (
    <div className="footerContainer">
      <div className="logoFooter">
        <img src={logo} alt="" />
      </div>
      <div className="iconsFooter">
        <a
          href="https://www.booking.com/hotel/pl/4-katy-przeciszow.pl.html"
          target="_blank"
        >
          <img className="icon booking" src={booking} alt="Booking.com" />
        </a>
        <a href="https://www.airbnb.pl/users/show/274241964" target="_blank">
          <img className="icon airbnb" src={airbnb} alt="AirBnb" />
        </a>
        <a
          href="https://www.facebook.com/p/Noclegi-Cztery-Kąty-100063680133150"
          target="_blank"
        >
          <img className="icon fb" src={fb} alt="FB" />
        </a>
      </div>
      <div className="gitContainer">
        <a
          href="https://github.com/sannmoon/four-corners-stays.gits"
          target="_blank"
        >
          {t("created")}
          <GitHubIcon className="github" />
        </a>
      </div>
    </div>
  );
}

export default Footer;

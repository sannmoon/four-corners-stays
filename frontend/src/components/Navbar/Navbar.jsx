import "./Navbar.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t } = useTranslation();

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={navbar ? "navbar active" : "navbar"}>
      <img src={logo} alt="logo" />
      <div className="navRight">
        <div className="navLinks">
          <Link to="/">{t("nav_home")}</Link>
          <Link to="/rooms">{t("nav_rooms")}</Link>
          <Link to="/services">{t("nav_services")}</Link>
          <Link to="/about"> {t("nav_about")} </Link>
          <Link to="/contact"> {t("nav_contact")} </Link>
        </div>
        <LanguageSelector />
      </div>
    </div>
  );
}

export default Navbar;

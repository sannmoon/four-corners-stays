import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();

  console.log(location);

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  const isHomepage = location.pathname === "/";
  return (
    <div className={navbar || !isHomepage ? "navbar active" : "navbar"}>
      <img src={logo} alt="logo" />
      <div className="navRight">
        <div className="navLinks">
          <Link to="/">{t("nav_home")}</Link>
          <Link to="/rooms">{t("nav_rooms")}</Link>
          <Link to="/attractions">{t("nav_attractions")}</Link>
          <Link to="/about"> {t("nav_about")} </Link>
          <Link to="/contact"> {t("nav_contact")} </Link>
        </div>
        <LanguageSelector />
      </div>
    </div>
  );
}

export default Navbar;

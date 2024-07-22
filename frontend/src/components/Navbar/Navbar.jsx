import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const location = useLocation();

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const navLinks = (
    <>
      <Link to="/">{t("nav_home")}</Link>
      <Link to="/rooms">{t("nav_rooms")}</Link>
      <Link to="/attractions">{t("nav_attractions")}</Link>
      <Link to="/about"> {t("nav_about")} </Link>
      <Link to="/contact"> {t("nav_contact")} </Link>
    </>
  );

  window.addEventListener("scroll", changeBackground);
  const isHomepage = location.pathname === "/";
  return (
    <div className={navbar || !isHomepage ? "navbar active" : "navbar"}>
      <img src={logo} alt="logo" />
      <div className="navRight">
        <div className="navLinks">{navLinks}</div>
        <div className="langSelector">
          <LanguageSelector />
        </div>
        <div className="menuIcon">
          <img src={menu} alt="" onClick={() => setOpen((prev) => !prev)} />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <LanguageSelector />
          {navLinks}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

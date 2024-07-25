import "./Navbar.scss";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

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
      <Link to="/#contact"> {t("nav_contact")} </Link>
    </>
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setOpen]);

  window.addEventListener("scroll", changeBackground);
  const isHomepage = location.pathname === "/";
  return (
    <div className={navbar || !isHomepage ? "navbar active" : "navbar"}>
      <img src={logo} alt="logo" className="logo" />
      <div className="navRight">
        <div className="navLinks">{navLinks}</div>
        <div className="langSelector">
          <LanguageSelector />
        </div>
        <div className="menuIcon" ref={menuRef}>
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

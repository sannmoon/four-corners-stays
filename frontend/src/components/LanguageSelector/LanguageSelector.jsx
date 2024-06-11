import { useTranslation } from "react-i18next";
import "./languageSelector.scss";
import { useState } from "react";
import brownglobe from "../../assets/brownglobe.svg";

const languages = [
  { code: "en", lang: "🇺🇸 English " },
  { code: "pl", lang: "🇵🇱 Polish" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  return (
    <div className="langContainer">
      <div className="langIcon">
        <img src={brownglobe} alt="" onClick={() => setOpen((prev) => !prev)} />
      </div>
      <div className={open ? "languageSwitch active" : "languageSwitch"}>
        {languages.map((lng) => {
          return (
            <div
              className={lng.code === i18n.language ? "selected" : ""}
              key={lng.code}
              onClick={() => changeLanguage(lng.code)}
            >
              {lng.lang}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageSelector;

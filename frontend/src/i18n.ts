import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    resources: {
      en: {
        translation: {
          nav_home: "Home",
          nav_rooms: "Rooms",
          nav_services: "Services",
          nav_about: "About",
          nav_contact: "Contact",
          homepage_subtitle: "COZY RETREAT",
          homepage_title:
            "IMMERSE YOURSELF IN NATURE WITH STUNNING VIEWS FROM THIS PEACEFUL RETREAT!",
          homepage_desc:
            "Wake up to stunning views. Relax on the porch and breathe in the fresh air. This comfortable home provides a perfect escape for those seeking a connection with nature.",
          homepage_contact: "CONTACT US",
          rooms_title: "Our Rooms",
          rooms_subtitle:
            "Find the perfect space to unwind and recharge, tailored to your individual needs 🍃",
          rooms_sunny_title: "Sunny",
          rooms_sunny_subtitle: "Max: 2 guests",
          blue_title: "Blue Serenity",
          blue_subtitle: "Max: 3 guests",
          boho_title: "Boho",
          boho_subtitle: "Max: 4 guests",
          loft_title: "Ruby Loft",
          loft_subtitle: "Max: 3 guests",
        },
      },
      pl: {
        translation: {
          nav_home: "Strona głòwna",
          nav_rooms: "Pokoje",
          nav_services: "Usługi",
          nav_about: "O nas",
          nav_contact: "Kontakt",
          homepage_subtitle: "PRZYTULNE SCHRONISKO",
          homepage_title:
            "ZANURZ SIĘ W NATURZE Z ZAPIERAJĄCYMI DECH W PIERSIACH WIDOKAMI W TYM SPOKOJNYM SCHRONISKU!",
          homepage_desc:
            "Budź się do zachwycających widoków. Odpręż się na werandzie i wdychaj świeże powietrze. Ten komfortowy dom zapewnia idealną ucieczkę dla tych, którzy szukają kontaktu z naturą.",
          homepage_contact: "SKONTAKTUJ SIĘ Z NAMI",
          rooms_title: "Nasze Pokoje",
          rooms_subtitle:
            "Odnajdź swoją idealną oazę relaksu i odzyskaj energię, stworzoną specjalnie z myślą o tobie",
          rooms_sunny_title: "Słoneczny",
          rooms_sunny_subtitle: "Max: 2 gości",
          blue_title: "Błękitny Spokój",
          blue_subtitle: "Max: 3 gości",
          boho_title: "Boho",
          boho_subtitle: "Max: 4 gości",
          loft_title: "Rubinowy Loft",
          loft_subtitle: "Max: 3 gości",
        },
      },
    },
  });

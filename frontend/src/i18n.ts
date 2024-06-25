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
          contact: "Contact Us",
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
          services_title: "SERVICES",
          games: "Board Games & Puzzles",
          games_desc:
            "Challenge your friends and family to a fun night in with a selection of board games and puzzles for all ages",
          drinks: "Drinks",
          drinks_desc: "Free coffee, tea and water in every room",
          kitchen: "Shared Kitchen",
          kitchen_desc:
            " This fully equipped kitchen is open to everyone in the house. Prepare meals or simply have a space to cook your favorite dishes. It's a great way to socialize and share meals.",
          lawn: "Backyard with Grill/Fireplace",
          lawn_desc:
            "Step outside and soak up the fresh air on the spacious lawn.  Grill up some burgers for a backyard barbecue, gather around a crackling fireplace for cozy evenings under the stars, or simply relax on the chairs and enjoy the peace and quiet.",
          wifi: "Free WiFi",
          wifi_desc:
            "Share your adventures and connect with loved ones back home with our free Wi-Fi available throughout the house.",
          parking: "Free Parking",
          parking_desc:
            "Forget about parking hassles! This house offers free on-site parking, ensuring a stress-free arrival and departure.",
          name: "Name",
          email: "Email",
          message: "Message",
          address: "Address",
          phone: "Call Us",
          contact_email: "Send Your Mail",
          send: "Send",
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
          contact: "Skontaktuj Się Z Nami",
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
          services_title: "USŁUGI",
          games: "Gry planszowe i puzzle",
          games_desc:
            "Rzuć wyzwanie znajomym i rodzinie na wieczór pełen zabawy z naszą kolekcją gier planszowych i puzzli dla wszystkich grup wiekowych",
          drinks: "Napoje",
          drinks_desc: "Bezpłatna kawa, herbata i woda w każdym pokoju",
          kitchen: "Wspólna kuchnia",
          kitchen_desc:
            "Ta w pełni wyposażona kuchnia jest dostępna dla wszystkich mieszkańców domu. Przygotuj posiłki lub po prostu gotuj swoje ulubione potrawy. To świetny sposób na spotkania towarzyskie i wspólne posiłki.",
          lawn: "Ogród z grillem/kominkiem",
          lawn_desc:
            "Wyjdź na zewnątrz i wchłoń świeże powietrze na przestronnym trawniku. Urządź grilla na świeżym powietrzu, zbierz się przy trzaskającym kominku na przytulny wieczór pod gwiazdami lub po prostu zrelaksuj się na krzesłach i ciesz się spokojem.",
          wifi: "Bezpłatne Wi-Fi",
          wifi_desc:
            "Dziel się swoimi przygodami i utrzymuj kontakt z bliskimi w domu dzięki naszemu bezpłatnemu Wi-Fi dostępnym w całym domu.",
          parking: "Bezpłatny parking",
          parking_desc:
            "Zapomnij o kłopotach z parkowaniem! Dom oferuje bezpłatny parking na miejscu, zapewniając bezstresowy przyjazd i wyjazd.",
          name: "Imię",
          message: "Wiadomość",
          address: "Adres",
          phone: "Zadzwoń do Nas",
          contact_email: "Wyślij Swój Email",
          send: "Wysłać",
        },
      },
    },
  });

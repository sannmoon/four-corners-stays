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
          homepage_explore: "Explore Now",
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
          contact: "Contact Us",
          created: "Created By Sansan",
          contact_rooms: "Contact",
          booking_info:
            "For more information or to book your stay, please contact us at:",
          sunny_title: "Sunny",
          sunny_desc:
            "Escape to the Sunny Room deluxe, a haven of light and warmth. Awaken each morning to sunbeams dancing across the plush [bed size, e.g., king-size] bed, inviting you to start your day feeling refreshed and energized.",
          single_bed: "1 Single Bed",
          single_beds: "2 Single Beds",
          sofa_bed: "1 Sofa Bed",
          queen_bed: "1 Queen-Sized Bed",
          bunk_bed: "1 Set Of Bunk Bed",
          amenities1: "Free WiFi",
          amenities2: "Private Bathroom",
          amenities3: "Toiletries, Hair Dryer",
          amenities4: "In-Room Beverages",
          amenities5: "Cutlery Set",
          amenities6: "TV",
          amenities7: "Garden",
          amenities8: "Shared Kitchen",
          amenities9: "Shared Laundry Facilities",
          amenities10: "Balcony",
          amenities11: "Private Mini Kitchen",
          occupancy: "Occupancy",
          child_occupancy: "1 Child",
          children_occupancy: "2 Children",
          adults_occupancy: "2 Adults",
          room_size: "Room Size",
          amenities: "Amenities",
          beds: "Bed",
          blue_desc:
            "Tranquil Oasis ~ Unwind and recharge in the calming embrace of Blue Serenity. Cool blue tones and soothing textures create a peaceful haven for relaxation. Curl up with a good book or enjoy a restful night's sleep in this tranquil space.",
          boho_desc:
            "Immerse yourself in the warm embrace of Boho Rose. This inviting space features a bohemian flair with a touch of sophistication, accentuated by rich rust pink hues and luxurious textures. Unwind in a world of comfort and creativity.",
          ruby_desc:
            "Indulge in urban luxury in the Ruby Loft. This plush upstairs room boasts a private balcony with breathtaking city views, perfect for enjoying an evening cocktail with a view. Immerse yourself in the rich red theme and modern amenities, creating a truly unforgettable experience.",
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
          homepage_explore: "Odkryj Teraz",
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
            "Zapomnij o kłopotach z parkowaniem! Oferujemy bezpłatny parking na miejscu, zapewniając bezstresowy przyjazd i wyjazd.",
          name: "Imię",
          message: "Wiadomość",
          address: "Adres",
          phone: "Zadzwoń do Nas",
          contact_email: "Wyślij Email",
          send: "Wyślij",
          contact: "Skontaktuj Się Z Nami",
          created: "Stworzono Przez Sansan",
          contact_rooms: "Kontakt",
          booking_info:
            "Dla więcej informacji lub aby zarezerwować pobyt, prosimy o kontakt pod:",
          sunny_title: "Słoneczny",
          sunny_desc:
            "Ucieknij do luksusowego pokoju Sunny Room, oazę światła i ciepła. Obudź się każdego ranka w promieniach słońca tańczących po miękkim łóżku [rozmiar łóżka, np. king-size], zapraszających do rozpoczęcia dnia z poczuciem świeżości i energii.",
          sofa_bed: "1 Sofa do Spania",
          single_bed: "1 Łóżko Pojedyncze",
          single_beds: "2 Łóżka Pojedyncze",
          queen_bed: "1 Łóżko Królewskich Rozmiarów",
          bunk_bed: "1 Zestaw Łóżek Piętrowych",
          amenities1: "Bezpłatne Wi-Fi",
          amenities2: "Prywatna Łazienka",
          amenities3: "Artykuły Toaletowe, Suszarka do Włosów",
          amenities4: "Napoje w Pokoju",
          amenities5: "Zestaw Sztućców",
          amenities6: "Telewizor",
          amenities7: "Ogród",
          amenities8: "Wspólna Kuchnia",
          amenities9: "Wspólna Pralnia",
          amenities10: "Balkon",
          amenities11: "Prywatna Mała Kuchnia",
          occupancy: "Obłożenie",
          child_occupancy: "1 Dziecko",
          children_occupancy: "2 Dzieci",
          adults_occupancy: "2 Dorosłych",
          room_size: "Wielkość Pokoju",
          amenities: "Udogodnienia",
          beds: "Łóżko",
          blue_desc:
            "Spokojna Oaza ~ Odpręż się i naładuj baterie w uspokajającym objęciu Niebieskiej Serenady. Chłodne niebieskie odcienie i łagodne tekstury tworzą spokojne schronienie dla relaksu. Zakręć się w dobrej książce lub ciesz się spokojnym snem w tym spokojnym miejscu.",
          boho_desc:
            "Zanurz się w ciepłym objęciu Boho Rose. To zapraszające miejsce charakteryzuje się boho stylem z nutą szykowności, podkreślonej przez bogate odcienie rdzawego różu i luksusowe tekstury. Zrelaksuj się w świecie wygody i kreatywności.",
          ruby_desc:
            "Oddaj się miejskiemu luksusowi w Ruby Loft. Ten przytulny pokój na piętrze posiada prywatny balkon z zapierającym dech w piersiach widokiem na miasto, idealny do delektowania się wieczornym drinkiem przy widoku. Zanurz się w bogatej czerwieni tematu i nowoczesnych udogodnień, tworzących naprawdę niezapomniane przeżycie.",
        },
      },
    },
  });

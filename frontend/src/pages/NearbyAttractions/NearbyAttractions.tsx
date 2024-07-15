import "./nearbyAttractions.scss";
import AttractionsBox from "./AttractionsBox";
import Energylandia_tidal from "../../assets/attractions/Energylandia_tidal.jpeg";
import Energylandia2 from "../../assets/attractions/Energylandia2.jpg";
import Energylandia_circle from "../../assets/attractions/Energylandia_circle.jpg";
import Energylandia from "../../assets/attractions/Energylandia.webp";
import PageContainer from "../../components/PageContainer/PageContainer";
import Tenczyn_Castle from "../../assets/attractions/Tenczyn_Castle.jpg";
import Zatorland from "../../assets/attractions/Zatorland.jpeg";
import Carp from "../../assets/attractions/Carp.jpeg";
import Inwald from "../../assets/attractions/Inwarld.jpeg";
import MuseumLesser from "../../assets/attractions/MuseumLesser.jpeg";
import Auschwitz from "../../assets/attractions/Auschwitz.webp";
import JohnPaul from "../../assets/attractions/JohnPaul.jpeg";
import Zamek from "../../assets/attractions/Zamek.webp";
import Slider from "../../components/Slider/Slider";
import { useTranslation } from "react-i18next";

function NearbyAttractions() {
  const { t } = useTranslation();

  const attractions = [
    {
      image: Energylandia2,
      title: "Energylandia",
      description: t("energylandia"),
      link: "https://energylandia.pl/en/",
    },

    {
      image: Zatorland,
      title: "Zatorland",
      description: t("zatorland"),
      link: "https://zatorland.pl/",
    },
    {
      image: Tenczyn_Castle,
      title: "Tęczyn Castle",
      description: t("tenczyn"),
      link: "https://www.youtube.com/watch?v=OgzVpJoRXrc",
    },
    {
      image: Inwald,
      title: "Inwałd Park",
      description: t("inwald"),
      link: "https://www.inwaldpark.pl/",
    },
    {
      image: Auschwitz,
      title: "Auschwitz",
      description: t("auschwitz"),
      link: "https://www.auschwitz.org/",
    },
    {
      image: MuseumLesser,
      title: "Museum of Western Lesser Poland",
      description: t("museumlesser"),
      link: "https://g.co/kgs/V3toDxe",
    },

    {
      image: Zamek,
      title: "Museum Zamek of Oświęcim",
      description: t("zamek"),
      link: "muzeum-zamek.pl",
    },
    {
      image: JohnPaul,
      title: "Museum of John Paul II",
      description: t("johnpaul"),
      link: "https://domjp2.pl/",
    },
    {
      image: Carp,
      title: "Karpia Dolina",
      description: t("carp"),
      link: "http://dolinakarpia.org/",
    },
  ];

  return (
    <PageContainer>
      <div className="nearbyAttractions">
        <div className="mainAttraction">
          <div className="mainAttractionImage">
            <img src={Energylandia} alt="Energylandia" className="highlight" />
            <img
              src={Energylandia_tidal}
              alt="Energylandia"
              className="circle1"
            />
            <img
              src={Energylandia_circle}
              alt="Energylandia"
              className="circle2"
            />
            <img src={JohnPaul} alt="JohnPaul" className="circle3" />
          </div>
          <div className="headerAttractions">
            <h1>{t("attractions_header")}</h1>
            <p>{t("attractions_header2")}</p>
          </div>
        </div>
        <div className="otherAttractions">
          <h1>{t("attractions_header3")}</h1>
          <Slider>
            {attractions.map((attraction) => (
              <AttractionsBox
                image={attraction.image}
                title={attraction.title}
                description={attraction.description}
                link={attraction.link}
              />
            ))}
          </Slider>
        </div>
      </div>
    </PageContainer>
  );
}

export default NearbyAttractions;

import "./Homepage.scss";
import MainSection from "./MainSection/MainSection";
import RoomsSection from "./RoomsSection/RoomsSection";
import ServicesSection from "./ServicesSection/ServicesSection";
import GallerySection from "./GallerySection/GallerySection";

function Homepage() {
  return (
    <div className="homepage">
      <MainSection />
      <RoomsSection />
      <ServicesSection />
      <GallerySection />
      <div className="divider"></div>
    </div>
  );
}

export default Homepage;

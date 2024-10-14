import "./Homepage.scss";
import MainSection from "./MainSection/MainSection";
import RoomsSection from "./RoomsSection/RoomsSection";
import ServicesSection from "./ServicesSection/ServicesSection";
import GallerySection from "./GallerySection/GallerySection";
import ContactSection from "./ContactSection/ContactSection";

function Homepage() {
  return (
    <div className="homepage">
      <MainSection />
      <RoomsSection />
      <ServicesSection />
      <GallerySection />
      <ContactSection />
    </div>
  );
}

export default Homepage;

import "./Homepage.scss";
import MainSection from "./MainSection/MainSection";
import RoomsSection from "./RoomsSection/RoomsSection";
import ServicesSection from "./ServicesSection/ServicesSection";

function Homepage() {
  return (
    <div className="homepage">
      <MainSection />
      <RoomsSection />
      <ServicesSection />
    </div>
  );
}

export default Homepage;

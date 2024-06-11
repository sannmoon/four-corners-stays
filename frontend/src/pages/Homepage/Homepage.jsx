import "./Homepage.scss";
import MainSection from "./MainSection/MainSection";
import RoomsSection from "./RoomsSection/RoomsSection";

function Homepage() {
  return (
    <div className="homepage">
      <MainSection />
      <RoomsSection />
    </div>
  );
}

export default Homepage;

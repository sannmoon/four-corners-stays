import "./Homepage.scss";
import bgSection1 from "../../assets/bgSection1.jpg";

function Homepage() {
  return (
    <div className="homepage">
      <div
        className="sectionOne"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bgSection1})`,
        }}
      >
        <div className="pageHeader">
          <h2>COZY RETREAT</h2>
          <h1>
            IMMERSE YOURSELF IN NATURE WITH STUNNING VIEWS FROM THIS PEACEFUL
            RETREAT!
          </h1>
          <p>
            Wake up to stunning views. Relax on the porch and breathe in the
            fresh air. This comfortable home provides a perfect escape for those
            seeking a connection with nature.
          </p>
          <button>CONTACT US</button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Rooms from "./pages/Rooms/Rooms";
import NearbyAttractions from "./pages/NearbyAttractions/NearbyAttractions";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/attractions" element={<NearbyAttractions />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

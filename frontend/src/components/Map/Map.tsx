import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "./map.scss";
import "leaflet/dist/leaflet.css";

function Map() {
  return (
    <MapContainer
      center={[49.9980059, 19.3649596]}
      zoom={14}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[49.9980059, 19.3649596]}></Marker>
    </MapContainer> //the zoom in and zoom out button overflowing
  );
}

export default Map;

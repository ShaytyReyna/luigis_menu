import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapContainer = ({ address }) => {
  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const defaultCenter = {
    lat: 0, // Latitud
    lng: 0, // Longitud
  };

  return (
    // clave random qu eme encontre en internet: AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik
    <LoadScript googleMapsApiKey="AIzaSyDh9AWGgg00uaCZw2tbDI9qBaG_E3Q6nvc">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={10}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;

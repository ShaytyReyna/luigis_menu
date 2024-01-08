import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapView = ({ address }) => {
  //   const defaultCenter = [0, 0]; // Puedes ajustar esto según tus necesidades
  const defaultCenter = { lat: 19.395202, lng: -99.091427 };
  return (
    <MapContainer
      // center={defaultCenter}
      center={defaultCenter}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={defaultCenter}>
        <Popup>{address}</Popup>
      </Marker>
    </MapContainer>
  );
};
export default MapView;

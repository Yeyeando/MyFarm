import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const positions = [
    { lat: 28.013950, lng: -15.647911 },
    { lat: 27.940700, lng: -15.658989 },
    { lat: 28.009581, lng: -15.502497 } 
  ];
  return (
    
    <MapContainer center={[28.013950, -15.647911]} zoom={13} style={{ height: "600px", width: "80%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {positions.map((position, index) => (
        <Marker key={index} position={[position.lat, position.lng]}>
        </Marker>
      ))}
    </MapContainer>
  );
};


export default Map;
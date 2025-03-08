import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const ClimateMap = () => {
  const markers = [
    {
      lat: 51.505,
      lng: -0.09,
      name: 'London',
      description: 'Temperature anomaly: +1.5°C',
    },
    {
      lat: 48.8566,
      lng: 2.3522,
      name: 'Paris',
      description: 'Temperature anomaly: +2.0°C',
    },
    {
      lat: 40.7128,
      lng: -74.006,
      name: 'New York',
      description: 'Sea level rise: +0.3m',
    },
    {
      lat: 35.6895,
      lng: 139.6917,
      name: 'Tokyo',
      description: 'CO2 emissions: High',
    },
  ];

  return (
    <div className="climate-map">
      <h2>Global Climate Data Map</h2>
      <MapContainer center={[20, 0]} zoom={2} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers.map((marker, index) => (
          <Marker key={index} position={[marker.lat, marker.lng]}>
            <Popup>
              <strong>{marker.name}</strong>
              <br />
              {marker.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default ClimateMap;
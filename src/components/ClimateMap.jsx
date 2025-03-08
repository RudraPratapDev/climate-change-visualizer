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

// Custom icons for different criticality levels
const iconColors = {
  low: new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  }),
  medium: new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  }),
  high: new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  }),
  critical: new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  }),
};

const ClimateMap = () => {
  const markers = [
    {
      lat: 51.505,
      lng: -0.09,
      name: 'London',
      description: 'Temperature anomaly: +1.5°C',
      criticality: 'medium',
    },
    {
      lat: 48.8566,
      lng: 2.3522,
      name: 'Paris',
      description: 'Temperature anomaly: +2.0°C',
      criticality: 'high',
    },
    {
      lat: 40.7128,
      lng: -74.006,
      name: 'New York',
      description: 'Sea level rise: +0.3m',
      criticality: 'high',
    },
    {
      lat: 35.6895,
      lng: 139.6917,
      name: 'Tokyo',
      description: 'CO2 emissions: High',
      criticality: 'critical',
    },
    {
      lat: 34.0522,
      lng: -118.2437,
      name: 'Los Angeles',
      description: 'Wildfires: 2020 - 4.2 million acres burned',
      criticality: 'critical',
    },
    {
      lat: 28.6139,
      lng: 77.209,
      name: 'New Delhi',
      description: 'Air Quality Index: Hazardous (500+)',
      criticality: 'critical',
    },
    {
      lat: -33.8688,
      lng: 151.2093,
      name: 'Sydney',
      description: 'Bushfires: 2019-2020 - 18.6 million hectares burned',
      criticality: 'critical',
    },
    {
      lat: 55.7558,
      lng: 37.6173,
      name: 'Moscow',
      description: 'Heatwave: 2010 - 56,000 deaths',
      criticality: 'high',
    },
    {
      lat: 23.6345,
      lng: -102.5528,
      name: 'Mexico City',
      description: 'Water scarcity: Severe drought conditions',
      criticality: 'high',
    },
    {
      lat: -15.7801,
      lng: -47.9292,
      name: 'Brasília',
      description: 'Deforestation: Amazon rainforest loss - 13,235 sq km in 2021',
      criticality: 'critical',
    },
    {
      lat: 39.9042,
      lng: 116.4074,
      name: 'Beijing',
      description: 'Sandstorms: Frequent due to desertification',
      criticality: 'high',
    },
    {
      lat: 6.5244,
      lng: 3.3792,
      name: 'Lagos',
      description: 'Flooding: Annual coastal flooding due to rising sea levels',
      criticality: 'medium',
    },
    {
      lat: -34.6037,
      lng: -58.3816,
      name: 'Buenos Aires',
      description: 'Heatwaves: Increasing frequency and intensity',
      criticality: 'high',
    },
    {
      lat: 64.1466,
      lng: -21.9426,
      name: 'Reykjavik',
      description: 'Glacial melt: Significant ice loss in Vatnajökull glacier',
      criticality: 'medium',
    },
    {
      lat: 19.076,
      lng: 72.8777,
      name: 'Mumbai',
      description: 'Monsoon flooding: 2021 - 1,000+ deaths',
      criticality: 'critical',
    },
    {
      lat: 1.3521,
      lng: 103.8198,
      name: 'Singapore',
      description: 'Rising sea levels: Threatening coastal infrastructure',
      criticality: 'high',
    },
    {
      lat: -33.9249,
      lng: 18.4241,
      name: 'Cape Town',
      description: 'Water crisis: 2018 - "Day Zero" narrowly avoided',
      criticality: 'high',
    },
    {
      lat: 59.3293,
      lng: 18.0686,
      name: 'Stockholm',
      description: 'Temperature rise: +2.5°C since pre-industrial levels',
      criticality: 'medium',
    },
    {
      lat: 45.4215,
      lng: -75.6972,
      name: 'Ottawa',
      description: 'Ice storms: Increasing frequency due to climate change',
      criticality: 'medium',
    },
    {
      lat: -41.2865,
      lng: 174.7762,
      name: 'Wellington',
      description: 'Sea level rise: Threatening coastal communities',
      criticality: 'high',
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
          <Marker key={index} position={[marker.lat, marker.lng]} icon={iconColors[marker.criticality]}>
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
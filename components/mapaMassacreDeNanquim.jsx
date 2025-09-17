import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;


function MapaMassacreDeNanquim() {
  const mapCenter = [32.055210614898755, 118.79447128083982];

  const points = [
    {
      position: [32.07161710908002, 118.75985053127717],
      text: "O local mais importante. É um museu e memorial construído no local do massacre de Jiangdongmen, onde milhares de corpos foram enterrados. É o ponto central para homenagear as vítimas."
    },
    {
      position: [32.0128755536124, 118.78168745016802],
      text: "O maior e mais bem preservado portão da cidade de Nanquim. Foi um dos principais pontos de entrada das tropas japonesas em 13 de dezembro de 1937 e um local de intensa resistência e combate."
    },
    {
      position: [32.05680670942008, 118.7786212247644],
      text: "Embora não seja um ponto único, você pode delimitar a área em seu mapa. Esta zona foi criada por estrangeiros como John Rabe para proteger civis chineses. A área incluía a Universidade de Nanquim e outras instituições, servindo como um 'santuário' temporário."
    },
    {
      position: [32.077571810474566, 118.72583322804083],
      text: "O rio que corta o centro de Nanquim foi um local de massacres em massa. As tropas japonesas executaram civis e prisioneiros de guerra nas margens e jogaram seus corpos na água. Você pode marcar um ponto representativo para este evento."
    },
    {
      position: [32.00378843293378, 118.7791762274373],
      text: "Este local fora dos portões da cidade foi palco de execuções em massa. Milhares de soldados e civis chineses foram mortos aqui. O local é hoje um parque com um memorial às vítimas."
    },
    {
      position: [32.03545221665358, 118.74329961115886],
      text: "Este ginásio foi usado como ponto de coleta de prisioneiros e civis antes de serem levados para execuções. Foi um dos locais de concentração de vítimas."
    }
  ];

  return (
    <MapContainer center={mapCenter} zoom={11} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {points.map((point, index) => (
        <Marker key={index} position={point.position}>
          <Popup>
            {point.text}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapaMassacreDeNanquim;
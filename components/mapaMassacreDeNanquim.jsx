import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// --- Correção para o ícone do marcador não aparecer ---
// O react-leaflet pode ter problemas para encontrar os ícones padrão. Este código corrige isso.
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;
// --- Fim da correção ---


function MapaMassacreDeNanquim() {
  // Posição central do mapa (Ex: Centro de Florianópolis)
  const mapCenter = [-27.5969, -48.5495];

  // Array com os dados dos seus pontos clicáveis
  const points = [
    {
      position: [-27.5969, -48.5495],
      text: "Centro Histórico de Florianópolis."
    },
    {
      position: [-27.6004, -48.5186],
      text: "Ponte Hercílio Luz, um marco da cidade."
    },
    {
      position: [-27.5873, -48.4742],
      text: "Lagoa da Conceição, famosa por suas paisagens e gastronomia."
    }
  ];

  return (
    <MapContainer center={mapCenter} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Mapeia o array de pontos para criar os marcadores no mapa */}
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
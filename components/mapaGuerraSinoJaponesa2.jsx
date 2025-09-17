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

function MapaGuerraSinoJaponesa2() {
  const mapCenter = [32.05877669365705, 118.79338697284761];

  const points = [
    {
      position: [32.06494370474471, 118.76246988706303],
      text: "Nos portões da cidade de Nanquim, em 13 de dezembro de 1937, o exército japonês entrou na capital. Nesse local, inúmeros prisioneiros de guerra chineses foram reunidos e levados para execuções em massa."
    },
    {
      position: [29.720749531353867, 112.65026967246725],
      text: "Às margens do Rio Yangtzé, milhares de soldados rendidos foram levados em grupos, mortos a tiros ou baionetadas e, em seguida, jogados no rio. Esse ponto simboliza um dos principais cenários de execuções coletivas."
    },
    {
      position: [29.00848276253598, 113.84919752606548],
      text: "A região da Montanha Mufu, nos arredores de Nanquim, também se tornou palco de massacres. Centenas de prisioneiros foram assassinados ali, reforçando a brutalidade da ocupação."
    },
    {
      position: [28.798897582989394, 113.0797585376001],
      text: "Nos locais de Xiaohongmen e Yuhuatai, ao sul da cidade, as tropas japonesas organizaram execuções em massa. Nessas áreas, milhares de pessoas foram fuziladas, e há relatos de vítimas queimadas vivas."
    },
    {
      position: [31.994440702193213, 118.77894248347296
],
      text: "Nos locais de Xiaohongmen e Yuhuatai, ao sul da cidade, as tropas japonesas organizaram execuções em massa. Nessas áreas, milhares de pessoas foram fuziladas, e há relatos de vítimas queimadas vivas."
    },
    {
      position: [32.06393484778922, 118.63330707061714],
      text: "A Zona de Segurança de Nanquim, localizada no centro da cidade e organizada por estrangeiros como John Rabe e missionários ocidentais, foi um dos poucos espaços de refúgio. Estima-se que cerca de 200.000 civis conseguiram sobreviver dentro dela."
    },
    {
      position: [31.847211457437037, 118.84754047663462],
      text: "Os consolados, escolas missionárias e hospitais, espalhados por Nanquim, foram usados como abrigos de emergência. Muitos civis encontraram proteção nesses prédios administrados por estrangeiros."
    },
    {
      position: [32.0608568593492, 118.79511090221811],
      text: "Nos templos e bairros da cidade antiga, houve saques, incêndios e assassinatos em massa de famílias inteiras. Esses locais representam a destruição cultural e social causada pelo massacre."
    }
  ];

  return (
    <MapContainer center={mapCenter} zoom={5} style={{ height: '500px', width: '100%' }}>
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

export default MapaGuerraSinoJaponesa2;
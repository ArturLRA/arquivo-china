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


function MapaGuerraSinoJaponesa1() {
  const mapCenter = [35.0226623638681, 104.0969139951084];

  const points = [
    {
      position: [39.850272767157065, 116.21908969925605],
      text: "Marco inicial – Ponte Marco Polo, Pequim (07/07/1937) - O conflito começou oficialmente com o Incidente da Ponte Marco Polo, próximo a Pequim. Um confronto entre tropas japonesas e chinesas acabou escalando e se transformou em guerra total. Esse ponto marca o início da invasão japonesa em larga escala."
    },
    {
      position: [31.23940036572418, 121.47201493846363],
      text: "Batalha de Xangai (agosto–novembro de 1937) - A primeira grande batalha urbana ocorreu em Xangai, onde tropas chinesas resistiram intensamente contra os japoneses. Apesar da resistência, a cidade foi dominada em novembro. Os combates foram brutais e resultaram em cerca de 250.000 mortos, entre soldados e civis."
    },
    {
      position: [32.0603252683089, 118.81166275739032],
      text: "Massacre de Nanquim (dezembro de 1937 – fevereiro de 1938) - Após a queda da capital chinesa, Nanquim, o exército japonês iniciou um massacre contra civis e soldados rendidos. Estima-se que entre 200.000 e 300.000 pessoas foram mortas, além de dezenas de milhares de mulheres que sofreram violência sexual. Esse episódio é lembrado como um dos piores crimes de guerra do século XX."
    },
    {
      position: [30.62319570959683, 114.2946406978672],
      text: "Batalha de Wuhan (junho–outubro de 1938) - Wuhan se tornou um dos centros de resistência chinesa. A batalha foi longa e sangrenta, com cerca de 1 milhão de soldados chineses envolvidos. Mesmo com a vitória japonesa, a cidade custou pesadas baixas e não trouxe o fim da resistência chinesa."
    },
    {
      position: [29.57122876682495, 106.55673049571043],
      text: "Chongqing – bombardeios aéreos (1938–1943) - Com a transferência da capital chinesa para Chongqing, a cidade foi alvo de intensos bombardeios japoneses durante anos. Milhares de civis morreram e grande parte da cidade foi destruída, marcando um dos primeiros casos de “terror aéreo” sistemático contra a população civil."
    },
    {
      position: [28.243530325999973, 112.91996898487605],
      text: "Segunda Batalha de Changsha (1941, província de Hunan) - Changsha foi um ponto estratégico muito disputado. Os chineses conseguiram resistir em diversas ofensivas japonesas. Na segunda batalha, em 1941, os japoneses sofreram milhares de baixas sem conseguir conquistar a cidade. Foi uma vitória importante para a moral chinesa."
    },
    {
      position: [29.17655265370726, 120.46088642339056],
      text: "Invasão da Indochina (1940–1941) - O Japão avançou para o sudeste asiático, usando territórios da China já ocupados como base. Essa expansão fez os Estados Unidos aumentarem as sanções contra o Japão, o que contribuiu para o ataque japonês a Pearl Harbor em 1941."
    },
    {
      position: [21.31670053060128, 96.42619462330937],
      text: "Campanha da Birmânia (1942–1944) - A China lutou ao lado dos Aliados contra os japoneses na Birmânia (atual Mianmar), em cooperação com tropas britânicas e indianas. Esse front foi importante para garantir rotas de abastecimento para os chineses, especialmente pela Estrada de Burma."
    },
    {
      position: [29.043136328617766, 111.70823438052321],
      text: "Batalha de Changde (1943, província de Hunan) - Outro confronto brutal em que os japoneses chegaram a usar armas químicas contra as tropas chinesas. Apesar da violência, os chineses conseguiram forçar a retirada japonesa."
    },
    {
      position: [24.332167709116124, 109.41522856622235],
      text: "Operação Ichi-Go (1944, províncias do centro da China) - Maior ofensiva japonesa em solo chinês, que tinha como objetivo controlar ferrovias e cortar linhas de suprimento dos Aliados. Apesar das vitórias iniciais, o Japão se desgastou e não conseguiu eliminar a resistência chinesa."
    },
    {
      position: [32.75874806385626, 129.85932563105607],
      text: "Derrota do Japão , marcar o Japão onde as bombas atingiram (1945) - A guerra terminou com a rendição japonesa após os bombardeios atômicos em Hiroshima e Nagasaki e a entrada da União Soviética no conflito contra o Japão. Com isso, a Segunda Guerra Sino-Japonesa foi encerrada, mas deixou um saldo devastador: estima-se entre 15 e 20 milhões de mortos chineses, em grande parte civis."
    },
    {
      position: [34.392625480594305, 132.467456264972],
      text: "Derrota do Japão , marcar o Japão onde as bombas atingiram (1945) - A guerra terminou com a rendição japonesa após os bombardeios atômicos em Hiroshima e Nagasaki e a entrada da União Soviética no conflito contra o Japão. Com isso, a Segunda Guerra Sino-Japonesa foi encerrada, mas deixou um saldo devastador: estima-se entre 15 e 20 milhões de mortos chineses, em grande parte civis."
    }
  ];

  return (
    <MapContainer center={mapCenter} zoom={2} style={{ height: '500px', width: '100%' }}>
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

export default MapaGuerraSinoJaponesa1;
import React from 'react';
import NavBarHome from '../components/NavBarHome.jsx';
import GridImagemContexto from "../components/gridImagemContexto.jsx";
import GridGuerraSinoJaponesa from "../components/gridGuerraSinoJaponesa1.jsx";
import GridMassacreDeNanquim from "../components/gridMassacreDeNanquim.jsx";
import TextoGuerraSinoJaponesa1 from '../components/textoGuerraSinoJaponesa1.jsx';
import TextoGuerraSinoJapones2 from '../components/textoGuerraSinoJaponesa2.jsx';
import TextoMassacreDeNanquim from '../components/textoMassacreDeNanquim.jsx';
import '../style/Home.css';

function Home () {
 return (
    <div>
        <div className='fundoFoto'>
            <div className="dark-overlay"></div>

            <div className='navbar'>
                <NavBarHome/>    
            </div> 

            <div className="titulos">
                <h1>Participação da China na Segunda Guerra Mundial
                    e o Massacre de Nanquim
                </h1>
            </div>
        </div>
        <div className='titulosTexto'>
           <h4>
            O projeto propõe a criação de um mapa interativo da Segunda Guerra Mundial, 
            no qual os alunos inserem pontos com informações sobre eventos importantes, como batalhas, datas, 
            locais, exércitos, armamentos e curiosidades. O objetivo é compreender a dimensão global do conflito, 
            desenvolver habilidades de pesquisa e análise crítica, estimular o uso de ferramentas digitais no aprendizado de História
            e promover o trabalho colaborativo na produção de conteúdos multimídia.
           </h4>

        </div>

        <GridImagemContexto/>

           <h4>
            A China foi o primeiro país a entrar no que se tornaria a Segunda Guerra Mundial, 
            sendo aliada dos Estados Unidos e do Império Britânico, isso aconteceu logo após o ataque a Pearl Harbor, 
            em 1941, até a rendição do Japão, em 1945.
           </h4><p/>
           
           <h4>
            Caso tivesse se rendido em 1938, o Japão teria dominado a China por uma geração ou mais e, 
            com isso, poderia ter direcionado suas forças contra a URSS, o Sudeste Asiático ou até mesmo a Índia Britânica. 
            Reconhecida como parte dos Aliados, a China, porém, dispunha de muito menos recursos em comparação aos outros países, 
            o que gerou divergências entre a visão do Ocidente e a dos chineses sobre sua contribuição para a guerra. 
           </h4><p/>

            <h4>
            Para nacionalistas e comunistas, o conflito havia começado em 1937 e, em suas próprias palavras, 
            eles foram “os primeiros a lutar”. Embora os exércitos chineses fossem fracos, 
            muitas de suas melhores tropas foram sacrificadas em grandes batalhas, como Xangai e Xuzhou.
           </h4><p/>

            <GridGuerraSinoJaponesa/>

            <div className='guerraSinoJaponesaTexto'>
            <h1>Guerra Sino-Japonesa</h1>

            <TextoGuerraSinoJaponesa1/>

            <h4>
                Com a revolta, a Coreia pediu ajuda à China. Tradicionalmente, a Coreia era um estado tributário da China, 
                ou seja, ela mantinha sua autonomia interna (tinha seu próprio rei, leis e governo), 
                porém pagava tributos como um sinal de lealdade e respeito. Em troca, a China oferecia proteção militar e política.
            </h4><p/>

            <h4>
                A localização estratégica da Coreia e seus recursos naturais de carvão e ferro ativaram o interesse do Japão. 
                Além disso, a China descumpriu o acordo ( ou convenção ) de Tientsin, também conhecida por Tianjin, feito em 1885, 
                onde nem a China nem o Japão poderiam enviar tropas para a Coreia sem avisar o outro. No entanto, 
                quando o rei da Coreia pediu ajuda, a China enviou tropas sem notificar o Japão.
            </h4><p/>

            <h4>
                O Japão aproveitou-se da situação para também enviar suas próprias tropas para a Coreia e usou o ocorrido como 
                justificativa para atacar a China. Na época, o Japão, sob a Era Meiji, passou por um processo de modernização e 
                industrialização que o tornou uma potência imperialista com ambições expansionistas. A China, por outro lado, 
                enfrentava um período de declínio e corrupção, demonstrando ineficácia em suas políticas e administração.
            </h4><p/>

            <h4>
                Em 23 de julho de 1894, os soldados japoneses invadiram a Coreia pelo sul, avançaram até a capital Seul e 
                conseguiram capturar o imperador coreano, Kim Hong-jip, que era ligado aos interesses da dinastia chinesa, 
                dominando a cidade. O Japão rapidamente obteve vitórias por causa de sua superioridade militar, especialmente no mar, 
                em comparação com a China que, embora fosse maior, 
                tinha um exército e uma marinha desorganizados e com tecnologias ultrapassadas.
            </h4><p/>

            <h4>
                Após essa vitória, a China recuou para Pyongyang, enquanto o exército japonês continuava a avançar, 
                conseguindo também tomar Pyongyang. Assim, o Japão estabeleceu um novo governo na Coreia, 
                porém a guerra ainda não havia acabado para eles. 
                A China já não tinha mais forças suficientes para continuar a guerra.
            </h4><p/>
            </div>




            <TextoGuerraSinoJapones2/>

            <h4>
                Logo no início o Japão estava muito bem equipado, treinado e etc, com isso obtiveram rápidas vitórias, 
                com ataques aéreos e tanques para dominar as forças chinesas, derrotas nas principais cidades costeiras como, 
                por exemplo, Xangai ( novembro de 1937 ) e a capital Nanquim, foram derrotadas em alguns meses 
                ( iremos abordar o Massacre de Nanquim mais a frente ) 
                e diversas mulheres foram estupradas sob as ordens do comandante japonês, Matsui Iwane. Uma semana antes do ocorrido, 
                o líder do partido político de centro-direita chinês ( Kuomintang ou Guomindang ), 
                Chiang Kai-shek mudou a capital da China de Nanjing para Chongqing, 
                com o intuito de afastar dos ataques japoneses e assim preparar o país para uma resistência, 
                adotando uma estratégia “espaço por tempo”.
            </h4><p/>
            
            <h4>
                A situação mudou drasticamente em 1941, 
                quando o Japão, com o objetivo de garantir mais recursos, 
                expandiu sua guerra para o Sudeste Asiático e atacou a base naval dos EUA em Pearl Harbor. 
                Esse ataque marcou o início da Guerra do Pacífico, 
                e a Segunda Guerra Sino-Japonesa tornou-se parte da Segunda Guerra Mundial. 
                A guerra na China só terminou com o fim da Segunda Guerra Mundial em 1945. 
                A derrota do Japão foi selada com as bombas atômicas lançadas sobre Hiroshima e Nagasaki e a 
                entrada da União Soviética no conflito. Em 2 de setembro de 1945, o Japão se rendeu formalmente.
            </h4><p/>
        
            <GridMassacreDeNanquim/>

            <h1>Massacre de Nanquim</h1>

            <h4>
                O Massacre de Nanquim, também conhecido como Estupro de Nanquim, 
                aconteceu entre 13 de dezembro de 1937 e fevereiro de 1938, durante a Segunda Guerra Sino-Japonesa. 
                Como citado anteriormente, após dominar Xangai, o exército japonês avançou para a capital chinesa. 
                O governo liderado por Chiang Kai-shek percebeu que não conseguiria defender Nanquim. Em 1º de dezembro de 1937, 
                quase todas as tropas oficiais foram retiradas da cidade e parte do governo começou a se posicionar em outras regiões, 
                buscando se afastar do avanço japonês.
            </h4><p/>

            <TextoMassacreDeNanquim/>

            <h4>
                Grande parte dos mortos eram soldados chineses que haviam se rendido ou sido capturados. 
                De acordo com a Convenção de Haia de 1907, eles deveriam ser tratados como prisioneiros de guerra, 
                recebendo proteção e alimentação. No entanto, para os japoneses, esses homens representavam um peso logístico, 
                já que eram milhares e exigiram recursos para serem mantidos. Assim, surgiu a ordem de executar todos os prisioneiros. 
                Muitos foram levados em grupos para as margens do rio Yangtzé, campos abertos ou valas comuns, 
                sendo mortos por fuzilamentos, decapitações e até queimados vivos. Há registros de práticas ainda mais cruéis, 
                como competições organizadas entre soldados japoneses para ver quem matava mais prisioneiros em menos tempo.
            </h4><p/>
        </div>
        
 )
}

export default Home;
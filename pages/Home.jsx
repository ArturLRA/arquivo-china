import React from 'react';
import NavBarHome from '../components/NavBarHome.jsx';
import GridImagemContexto from "../components/gridImagemContexto.jsx";
import GridGuerraSinoJaponesa from "../components/gridGuerraSinoJaponesa1.jsx";
import GridMassacreDeNanquim from "../components/gridMassacreDeNanquim.jsx";
import TextoGuerraSinoJaponesa1 from '../components/textoGuerraSinoJaponesa1.jsx';
import TextoGuerraSinoJapones2 from '../components/textoGuerraSinoJaponesa2.jsx';
import TextoMassacreDeNanquim from '../components/textoMassacreDeNanquim.jsx';
import ModalGuerraSinoJaponesa1 from '../components/modalGuerraSinoJaponesa1.jsx';
import ModalGuerraSinoJaponesa2 from '../components/modalGuerraSinoJaponesa2.jsx';
import ModalMassacreDeNanquim from '../components/modalMassacreDeNanquim.jsx';
import ModalMassacreDeNanquim2 from '../components/modalMassacreDeNanquim2.jsx';
import Footer from '../components/footer.jsx';
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
        <section id="projeto">
        <div className='titulosTexto'>
           <h4>
            O projeto propõe a criação de um mapa interativo da Segunda Guerra Mundial, 
            no qual os alunos inserem pontos com informações sobre eventos importantes, como batalhas, datas, 
            locais, exércitos, armamentos e curiosidades. O objetivo é compreender a dimensão global do conflito, 
            desenvolver habilidades de pesquisa e análise crítica, estimular o uso de ferramentas digitais no aprendizado de História
            e promover o trabalho colaborativo na produção de conteúdos multimídia.
           </h4>

        </div>
        </section>

        <GridImagemContexto/>

            <section id="assunto">
           <div className='contextoTexto'>
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
           </div>

            <GridGuerraSinoJaponesa/>

            <h1 className='tituloGuerraSinoJaponesa'>Guerra Sino-Japonesa</h1>

            <div className='guerraSinoJaponesaTexto1' id='guerraSinoJaponesa'>
            
            <TextoGuerraSinoJaponesa1/>

            

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

            <ModalGuerraSinoJaponesa1/>
            
            <div className="container-separador">
                <div className="linha-decorativa"></div>
            </div>

            <div className='guerraSinoJaponesaTexto1'>
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
            </div>

            <ModalGuerraSinoJaponesa2/>
            <div className="container-separador">
            <div className="linha-decorativa"></div>
            </div>
            </section>
        
            <GridMassacreDeNanquim/>

            <section id="massacreDeNanquim">
            <h1 className='tituloMassacreDeNanquim'>Massacre de Nanquim</h1>
            <div className='massacreDeNanquimTexto'>
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

        <ModalMassacreDeNanquim/>
        <div className="container-separador">
        <div className="linha-decorativa"></div>
        </div>
        </section>

        <section id="mulheresDeConforto">

        <h1 className='tituloMulheresDeConforto'>Mulheres de Conforto</h1>

        <div className='massacreDeNanquimTexto2'>
            <h4>O termo "Mulheres de Conforto" (uma tradução do japonês ianfu) é um eufemismo para as mulheres e meninas que foram 
                forçadas à escravidão sexual pelo Exército Imperial Japonês durante a Segunda Guerra Mundial. 
                Estima-se que centenas de milhares de vítimas foram coagidas a trabalhar em bordéis militares, 
                conhecidos como "estações de conforto", estabelecidos em países e territórios ocupados pelo Japão, como Coreia, 
                China, Filipinas, Indonésia e Taiwan.</h4><p/>

            <h4>A criação desse sistema de escravidão sexual, que perdurou de 1932 a 1945, 
                tinha como objetivo principal a manutenção da moral das tropas, 
                a prevenção de doenças sexualmente transmissíveis e o controle de estupros aleatórios por soldados em áreas de conflito. 
                As mulheres eram frequentemente recrutadas sob falsas promessas de emprego legítimo em fábricas ou lavanderias, 
                mas acabavam confinadas em condições brutais, sendo submetidas a estupros diários, tortura e, em muitos casos, 
                assassinatos.</h4><p/>

            <h4>A questão das "mulheres de conforto" permanece como um ponto de grande tensão nas relações diplomáticas entre o Japão e 
                a Coreia do Sul. O governo japonês, por décadas, negou o envolvimento direto do Estado na coerção das mulheres. 
                No entanto, a descoberta de documentos históricos e, principalmente, o testemunho corajoso das sobreviventes, 
                tornaram o problema uma pauta central nos direitos humanos internacionais.
            </h4>

            <h4>O reconhecimento formal e a reparação às vítimas têm sido um processo lento e complexo. Em 2015, 
                Japão e Coreia do Sul fecharam um acordo bilateral que incluía um pedido de desculpas de Tóquio e a criação de um 
                fundo para as vítimas. No entanto, o acordo gerou controvérsia e foi considerado insuficiente por ativistas e pelas 
                próprias sobreviventes, que exigem uma admissão de culpa mais clara e a inclusão da história nos livros didáticos 
                japoneses para evitar que o episódio seja esquecido.</h4>
            
            <h4>A luta das "mulheres de conforto" e seus apoiadores continua a ser um marco na busca por justiça e memória histórica, 
                destacando a importância de não silenciar as vítimas de crimes de guerra e de garantir que atrocidades desse tipo não 
                se repitam.</h4>
        </div>
        <ModalMassacreDeNanquim2/>
        </section>
        <Footer/>
        </div>
        
 )
}

export default Home;
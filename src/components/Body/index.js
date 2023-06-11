import styled from "styled-components";
import casa from "../../assets/Casa.png";
import saude from "../../assets/Saude.png";
import ti from "../../assets/TI.png";
import ci from "../../assets/CI.png";
import ea from "../../assets/EA.png";
import iot from "../../assets/IOT.png";
import ia from "../../assets/IA.png";
import saude2 from "../../assets/Saude2.png";
import ti2 from "../../assets/TI2.png";
import ci2 from "../../assets/CI2.png";

const BodyDiv = styled.div`
  margin-top: 50px;
  margin-left: 10%;
  margin-right: 10%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-weight: bold;
    font-size: 35px;
    margin-bottom: 40px;
  }
  p {
    font-size: 21.8px;
    text-align: center;
  }
  .Texto0 {
    margin-top: 20px;
    font-size: 26px;
  }
  .Bola1 {
    width: 100px;
    height: 100px;
    background-color: #c3c3c3;
    border-radius: 50%;
    margin-top: 40px;
  }
  .Bola2 {
    width: 100px;
    height: 100px;
    background-color: #c3c3c3;
    border-radius: 50%;
    margin-bottom: 40px;
  }
  .Tronco {
    width: 40px;
    height: 1190px;
    background-color: #c3c3c3;
    margin: -20px 0;
  }
  .Galho1 {
    border-radius: 50px;
    position: absolute;
    width: 275px;
    height: 40px;
    background-color: #c3c3c3;
    margin: -20px 0;
    top: 550px;
    left: 32%;
  }
  .Texto1 {
    position: absolute;
    width: 400px;
    top: 492.5px;
    left: 3.5%;
  }
  .Galho2 {
    border-radius: 50px;
    position: absolute;
    width: 275px;
    height: 40px;
    background-color: #c3c3c3;
    margin: -20px 0;
    top: 750px;
    right: 32%;
  }
  .Texto2 {
    position: absolute;
    width: 400px;
    top: 715px;
    right: 3.5%;
  }
  .Galho3 {
    border-radius: 50px;
    position: absolute;
    width: 275px;
    height: 40px;
    background-color: #c3c3c3;
    margin: -20px 0;
    top: 950px;
    left: 32%;
  }
  .Texto3 {
    position: absolute;
    width: 400px;
    top: 872.5px;
    left: 3.5%;
  }
  .Galho4 {
    border-radius: 50px;
    position: absolute;
    width: 275px;
    height: 40px;
    background-color: #c3c3c3;
    margin: -20px 0;
    top: 1150px;
    right: 32%;
  }
  .Texto4 {
    position: absolute;
    width: 400px;
    top: 1105px;
    right: 3.5%;
  }
  .Galho5 {
    border-radius: 50px;
    position: absolute;
    width: 275px;
    height: 40px;
    background-color: #c3c3c3;
    margin: -20px 0;
    top: 1350px;
    left: 32%;
  }
  .Texto5 {
    position: absolute;
    width: 400px;
    top: 1285px;
    left: 3.5%;
  }
  img {
    position: absolute;
    height: 100px;
  }
  .CasaI {
    top: 440px;
    left: 37.25%;
  }
  .SaudeBS {
    top: 639px;
    right: 37.25%;
  }
  .TI {
    top: 829.99px;
    left: 37.25%;
  }
  .CI {
    top: 1032px;
    right: 37.25%;
  }
  .EA {
    top: 1229.99px;
    left: 37.25%;
  }
  .Texto6 {
    margin-top: 20px;
    font-size: 26px;
  }
  .Bola3 {
    width: 100px;
    height: 100px;
    background-color: #c3c3c3;
    border-radius: 50%;
    margin-top: 40px;
  }
  .Bola4 {
    width: 100px;
    height: 100px;
    background-color: #c3c3c3;
    border-radius: 50%;
    margin-bottom: 40px;
  }
  .Tronco2 {
    width: 40px;
    height: 1190px;
    background-color: #c3c3c3;
    margin: -20px 0;
  }
  .Galho7 {
    border-radius: 50px;
    position: absolute;
    width: 275px;
    height: 40px;
    background-color: #c3c3c3;
    margin: -20px 0;
    top: 2050px;
    right: 32%;
  }
  .Texto7 {
    position: absolute;
    width: 400px;
    top: 1946.5px;
    right: 3.5%;
  }
  .Galho8 {
    border-radius: 50px;
    position: absolute;
    width: 275px;
    height: 40px;
    background-color: #c3c3c3;
    margin: -20px 0;
    top: 2250px;
    left: 32%;
  }
  .Texto8 {
    position: absolute;
    width: 400px;
    top: 2135px;
    left: 3.5%;
  }
  .Galho9 {
    border-radius: 50px;
    position: absolute;
    width: 275px;
    height: 40px;
    background-color: #c3c3c3;
    margin: -20px 0;
    top: 2450px;
    right: 32%;
  }
  .Texto9 {
    position: absolute;
    width: 400px;
    top: 2410px;
    right: 3.5%;
  }
  .Galho10 {
    border-radius: 50px;
    position: absolute;
    width: 275px;
    height: 40px;
    background-color: #c3c3c3;
    margin: -20px 0;
    top: 2650px;
    left: 32%;
  }
  .Texto10 {
    position: absolute;
    width: 400px;
    top: 2535px;
    left: 3.5%;
  }
  .Galho11 {
    border-radius: 50px;
    position: absolute;
    width: 275px;
    height: 40px;
    background-color: #c3c3c3;
    margin: -20px 0;
    top: 2850px;
    right: 32%;
  }
  .Texto11 {
    position: absolute;
    width: 400px;
    top: 2742.5px;
    right: 3.5%;
  }
  .IOT {
    top: 1929px;
    right: 37.25%;
  }
  .IA {
    top: 2129.99px;
    left: 37.25%;
  }
  .SaudeBS2 {
    top: 2339px;
    right: 37.25%;
  }
  .TI2 {
    top: 2529.99px;
    left: 37.25%;
  }
  .CI2 {
    top: 2732px;
    right: 37.25%;
  }
`;

export default function Body() {
  return (
    <BodyDiv>
      <h1>Tecnologia Smart e Internet</h1>
      <p>
        A tecnologia "Smart" refere-se a dispositivos e sistemas que possuem
        recursos avançados de conectividade e interação, enquanto a Internet é a
        infraestrutura global que permite a comunicação e o compartilhamento de
        informações em escala mundial. Juntas, essas tecnologias têm
        impulsionado o desenvolvimento de soluções inovadoras e conectadas em
        várias áreas de nossas vidas.
      </p>
      <p className="Texto0">
        A tecnologia smart e a Internet têm possibilitado uma série de avanços
        tecnológicos em diferentes áreas da nossa vida.
      </p>
      <p className="Texto1">
        Casa inteligente (smart home): A tecnologia smart permite a automação e
        o controle de vários dispositivos domésticos, como termostatos,
        iluminação, fechaduras, eletrodomésticos e sistemas de segurança.
      </p>
      <p className="Texto2">
        Saúde e bem-estar: A Internet e os dispositivos smart têm impulsionado o
        desenvolvimento de soluções de saúde e bem-estar.
      </p>
      <p className="Texto3">
        Transporte inteligente: A Internet e a tecnologia smart têm desempenhado
        um papel fundamental no avanço dos sistemas de transporte. Aplicativos
        de compartilhamento de carros, como Uber e Lyft, utilizam a
        conectividade para conectar motoristas e passageiros de forma eficiente.
      </p>
      <p className="Texto4">
        Cidades inteligentes: A Internet e a tecnologia smart estão sendo usadas
        para criar cidades inteligentes, nas quais a infraestrutura é conectada
        e gerenciada de forma eficiente.
      </p>
      <p className="Texto5">
        Educação e aprendizado: A Internet tem revolucionado a forma como
        aprendemos e acessamos informações. Plataformas de ensino online, cursos
        em vídeo, tutoriais interativos e ambientes de aprendizado virtual têm
        se tornado cada vez mais populares e acessíveis.
      </p>
      <div className="Bola1"></div>
      <div className="Tronco"></div>
      <div className="Galho1"></div>
      <div className="Galho2"></div>
      <div className="Galho3"></div>
      <div className="Galho4"></div>
      <div className="Galho5"></div>
      <div className="Bola2"></div>
      <img src={casa} alt="Casa Inteligente" className="CasaI" />
      <img src={saude} alt="Saúde e Bem-star" className="SaudeBS" />
      <img src={ti} alt="Transporte Inteligente" className="TI" />
      <img src={ci} alt="Cidade Inteligente" className="CI" />
      <img src={ea} alt="Educação e Aprendizado" className="EA" />
      <p className="Texto6">
        As possíveis perspectivas de utilização da tecnologia smart e da
        Internet no futuro são vastas e promissoras.
      </p>
      <p className="Texto7">
        Internet das Coisas (IoT) avançada: A IoT continuará a se expandir,
        conectando um número cada vez maior de dispositivos e objetos do nosso
        cotidiano. Além dos dispositivos já conhecidos, veremos a integração de
        uma variedade ainda maior de dispositivos, como eletrodomésticos, roupas
        inteligentes, equipamentos de saúde, veículos e até mesmo
        infraestruturas urbanas, como semáforos e redes de energia.
      </p>
      <p className="Texto8">
        Inteligência Artificial (IA) integrada: A combinação da tecnologia smart
        com a IA resultará em sistemas ainda mais inteligentes e autônomos. Os
        dispositivos poderão aprender com o uso e se adaptar às preferências do
        usuário, tornando-se mais personalizados e eficientes. Assistentes
        virtuais, chatbots e sistemas de reconhecimento de voz serão aprimorados
        para oferecer interações mais naturais e contextuais.
      </p>
      <p className="Texto9">
        Setor de saúde e bem-estar ampliado: A tecnologia smart e a Internet
        terão um impacto significativo no setor de saúde e bem-estar.
      </p>
      <p className="Texto10">
        Mobilidade e transporte conectados: A tecnologia smart e a Internet
        continuarão a transformar o setor de transporte. Veículos autônomos se
        tornarão mais comuns, oferecendo maior segurança e eficiência nas
        estradas. Além disso, veremos o desenvolvimento de sistemas de
        transporte público inteligentes, como ônibus e metrôs autônomos, e a
        integração de plataformas de compartilhamento de carros com outras
        soluções de mobilidade.
      </p>
      <p className="Texto11">
        Cidades inteligentes e sustentáveis: A Internet e a tecnologia smart
        desempenharão um papel fundamental na construção de cidades mais
        eficientes e sustentáveis. Sistemas de gerenciamento de energia
        inteligentes, iluminação pública eficiente, monitoramento ambiental em
        tempo real e planejamento urbano baseado em dados serão amplamente
        implementados para melhorar a qualidade de vida dos cidadãos e reduzir o
        impacto ambiental.
      </p>
      <div className="Bola3"></div>
      <div className="Tronco2"></div>
      <div className="Galho6"></div>
      <div className="Galho7"></div>
      <div className="Galho8"></div>
      <div className="Galho9"></div>
      <div className="Galho10"></div>
      <div className="Galho11"></div>
      <div className="Bola4"></div>
      <img src={iot} alt="Internet das Coisas" className="IOT" />
      <img src={ia} alt="Inteligencia Artificial" className="IA" />
      <img src={saude2} alt="Saúde e Bem-star" className="SaudeBS2" />
      <img src={ti2} alt="Transporte Inteligente" className="TI2" />
      <img src={ci2} alt="Cidade Inteligente" className="CI2" />
    </BodyDiv>
  );
}

import styled from "styled-components";
import gt from "../../assets/GT.png";

const FooterDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 85px;
  background-color: #d2beb3;
  font-size: 16px;
  a {
    border-radius: 50%;
  }
  img {
    margin-top: 5px;
    width: 75px;
  }
`;

export default function Footer() {
  return (
    <FooterDiv>
      <div>
        <p>E-mail para contato: 2645@insararas.com.br </p>
        <p>
          Feito por: Pedro H.C da Silva <br /> João Pedro Bonato de Góes <br />{" "}
          Guilherme Franco
        </p>
      </div>
      <div>
        <a href="https://github.com/PedroHenriqueCruzdaSilva/Pedro-Henrique-Cruz-da-Silva">
          <img src={gt} alt="github-icon" />
        </a>
      </div>
    </FooterDiv>
  );
}

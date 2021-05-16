import React from "react";
import "./style.css";
import { CardVideo } from "./components/cardVideo/cardVideo";
import BotaoMenu from "./components/BotaoMenu/BotaoMenu";
import styled from "styled-components";

const MeuFooter = styled.footer`
  background: red;
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  padding: 0 10px;
`;

export default function App() {
  function reproduzVideo(nome) {
    alert(`O vídeo ${nome} está sendo reproduzido`);
  }

  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <BotaoMenu textoDoItem={"Início"} /> 
            <BotaoMenu textoDoItem={"Em Alta"} />
            <BotaoMenu textoDoItem={"Inscrições"} />
            
            <hr />
            <BotaoMenu textoDoItem={"Biblioteca"} />
            <BotaoMenu textoDoItem={"Histórico"} />
          </nav>

          <section className="painel-de-videos">
            <CardVideo
              titulo={"Vídeo 1"}
              imagem={"https://picsum.photos/400/400?a=1"}
              funcaoClick={reproduzVideo}
            />
            <CardVideo
              titulo={"Vídeo 2"}
              imagem={"https://picsum.photos/400/400?a=2"}
              funcaoClick={reproduzVideo}
            />
            <CardVideo
              titulo={"Vídeo 3"}
              imagem={"https://picsum.photos/400/400?a=3"}
              funcaoClick={reproduzVideo}
            />
            <CardVideo
              titulo={"Vídeo 4"}
              imagem={"https://picsum.photos/400/400?a=4"}
              funcaoClick={reproduzVideo}
            />
            <CardVideo
              titulo={"Vídeo 5"}
              imagem={"https://picsum.photos/400/400?a=5"}
              funcaoClick={reproduzVideo}
            />
            <CardVideo
              titulo={"Vídeo 6"}
              imagem={"https://picsum.photos/400/400?a=6"}
              funcaoClick={reproduzVideo}
            />
            <CardVideo
              titulo={"Vídeo 7"}
              imagem={"https://picsum.photos/400/400?a=7"}
              funcaoClick={reproduzVideo}
            />
            <CardVideo
              titulo={"Vídeo 8"}
              imagem={"https://picsum.photos/400/400?a=8"}
              funcaoClick={reproduzVideo}
            />
          </section>
        </main>

        <MeuFooter>
          <h4>Oi! Eu moro no footer!</h4>
        </MeuFooter>
      </div>
    </div>
  );
}

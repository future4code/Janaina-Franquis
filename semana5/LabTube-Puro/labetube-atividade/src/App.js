import './App.css';
import CardVideo from './components/CardVideo';
import BotaoMenu from "./components/BotaoMenu/BotaoMenu";
import styled from "styled-components";

const MeuFooter = styled.footer`
  height: 10%;
  background-color: gold;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;

`;
 
function App() {
  

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  return (
    <div>
      <header>
        <h1>LabTube</h1>
        <input type="text" placeholder="Busca" id="campoDeBusca" />
      </header>

      <main>
        <nav className="menu-vertical">
          <ul>
            <BotaoMenu textoDoItem={"Ínicio"}/> 
            <BotaoMenu textoDoItem={"Em Alta"}/>
            <BotaoMenu textoDoItem={"Inscrições"}/>
            <hr />
            <BotaoMenu textoDoItem={"Biblioteca"}/>
            <BotaoMenu textoDoItem={"Histórico"}/>
          </ul>
        </nav>

        <section className="painel-de-videos">
          <CardVideo tituloDoVideo={"Titulo 1"} imagem={"https://picsum.photos/400/400?a=1"} funcaoClick={reproduzVideo}/>
          <CardVideo tituloDoVideo={"Titulo 2"} imagem={"https://picsum.photos/400/400?a=2"} funcaoClick={reproduzVideo}/>
          <CardVideo tituloDoVideo={"Titulo 3"} imagem={"https://picsum.photos/400/400?a=3"} funcaoClick={reproduzVideo}/>
          <CardVideo tituloDoVideo={"Titulo 4"} imagem={"https://picsum.photos/400/400?a=4"} funcaoClick={reproduzVideo}/>
          <CardVideo tituloDoVideo={"Titulo 5"} imagem={"https://picsum.photos/400/400?a=5"} funcaoClick={reproduzVideo}/>
          <CardVideo tituloDoVideo={"Titulo 6"} imagem={"https://picsum.photos/400/400?a=6"} funcaoClick={reproduzVideo}/>
          <CardVideo tituloDoVideo={"Titulo 7"} imagem={"https://picsum.photos/400/400?a=7"} funcaoClick={reproduzVideo}/>
          <CardVideo tituloDoVideo={"Titulo 8"} imagem={"https://picsum.photos/400/400?a=8"} funcaoClick={reproduzVideo}/>
          <CardVideo tituloDoVideo={"Titulo 9"} imagem={"https://picsum.photos/400/400?a=8"} funcaoClick={reproduzVideo}/>
          <CardVideo tituloDoVideo={"Titulo 10"} imagem={"https://picsum.photos/400/400?a=9"} funcaoClick={reproduzVideo}/>
          <CardVideo tituloDoVideo={"Titulo 11"} imagem={"https://picsum.photos/400/400?a=10"} funcaoClick={reproduzVideo}/>
          <CardVideo tituloDoVideo={"Titulo 12"} imagem={"https://picsum.photos/400/400?a=11"} funcaoClick={reproduzVideo}/>
        </section>
      </main>

      <MeuFooter>
        <h4>Oi! Eu moro no footer!</h4>
      </MeuFooter>
    </div>
  );
}

export default App;

// export function MeuComponente => import {MeuComponente}
// export default function MeuComponente = import MeuComponente
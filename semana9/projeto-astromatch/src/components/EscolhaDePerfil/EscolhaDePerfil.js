import React, { useEffect, useState } from "react";
import CardPerfil from "./CardPerfil";
import BotaoDeEscolha from './BotaoDeEscolha'
import styled from 'styled-components';
import axios from "axios";

//GET Profile To Choose
function EscolhaDePerfil() {
  const [perfilToChoose, setPerfilToChoose] = useState ({}) 
  
  
    useEffect(() => {
    axios
    .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:janaina/person")
    .then((response) => setPerfilToChoose(response.data.profile)) 
    .catch((error) => console.log(error));
  }); 
  

  return (
  <div>
    <CardPerfil perfil={perfilToChoose} />
    <BotaoDeEscolha />
  </div>
  );
}

export default EscolhaDePerfil;

import React from "react";
import EscolhaDePerfil from "../EscolhaDePerfil/EscolhaDePerfil";
import HomeBar from "../HomeBar/HomeBar";
import ListaDeMatch from "../ListaDeMatch/ListaDeMatch";
import Button from "../Button/ButtonDeLimpar";
import styled from "styled-components";

const MainContainer = styled.div`
  border: 2px solid black;
  border-radius: 5px;
  width: 400px;
  height: 600px;
  background-color: azure;
  margin: 100px;
  display: flex;
  flex-direction: column;
 

`;

function Main() {
  return (
    <MainContainer>
      <HomeBar />
      <EscolhaDePerfil />
      {/* <ListaDeMatch /> */}
    </MainContainer>
  );
}

export default Main;

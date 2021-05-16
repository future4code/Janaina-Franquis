import React from "react";
import { ContainerBotao } from "./styled.js";


export default function BotaoMenu(props) {
  return (
    <ContainerBotao>
      <p>{props.textoDoItem}</p>
    </ContainerBotao>
  );
}

import React from "react";
import {ContainerBotao} from "./styled";




export default function BotaoMenu(props) {
  return (
    <div className="botoes-menu-vertical">
      <ContainerBotao>
        <p>{props.textoDoItem}</p>
      </ContainerBotao>
    </div>
  );
}

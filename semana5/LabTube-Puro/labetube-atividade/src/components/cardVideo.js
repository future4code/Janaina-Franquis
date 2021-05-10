import React from "react";
import "";

export function CardVideo(props) {
  return (
    <div
      className="box-pagina-principal"
      onClick={() => props.funcaoClick(props.titulo)}
    >
      <img src={props.imagem} alt="" />
      <h4>{props.titulo}</h4>
    </div>
  );
}
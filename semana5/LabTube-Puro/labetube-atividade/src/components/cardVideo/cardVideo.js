import React from "react";




export function CardVideo(props) {
 // retornando JSX
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
import React from "react";



// utilizando props para importar imagem, titulo do video e função do botão
/*
export default function CardVideo (props){
    console.log(props)
    return(
        <div 
           className="box-pagina-principal media1" 
           onClick={() => props.funcaoClick(props.tituloDoVideo)}>
          <img src={props.imagem} alt="" />
          <h4>{props.tituloDoVideo}</h4>
        </div>
        
    )
}
*/
//Função sem parametro: onClick={props.funcaoClick}>
// Função com parametro:() => props.funcaoClick("Olá")

// Transformando em componente de classe
export default class CardVideo extends React.Component {
      render () {
        return (
            <div 
                className="box-pagina-principal media1"
                onClick={() => this.props.funcaoClick(this.props.tituloDoVideo)}
                >
                <img src={this.props.imagem} alt="" />
                <h4>{this.props.tituloDoVideo}</h4>
            </div>
        )
    }

}
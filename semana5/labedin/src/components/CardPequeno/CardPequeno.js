import React from 'react';
import './CardPequeno.css';

function CardPequeno(props) {
    return (
        <div className="little-container">
            <img src={ props.imagem } alt="icone"/>
            <div>
                <p>{ props.email }</p>
                <p>{ props.endereco }</p>
                <p>{ props.telefone }</p>
            </div>
        </div>
    );
}

export default CardPequeno;
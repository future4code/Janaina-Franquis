import React from 'react'
import styled from 'styled-components';

const CardPerfilContainer = styled.div`
margin: 16px;
border: 1px solid grey ;
`

const FotoPerfil = styled.img`
width: 100%;
display: block;
max-height: 350px;
`

const InfoPerfil = styled.div`
padding: 5px;

`



function CardPerfil (props) {
  const perfil = props.perfil

    return (
      <CardPerfilContainer>
        <FotoPerfil src={perfil.photo}/>
        <InfoPerfil>
          <p>{perfil.name}, {perfil.age}</p>
          <p>{perfil.bio}</p>
        </InfoPerfil>
      </CardPerfilContainer>
    );
  }
  
  
  export default CardPerfil
  
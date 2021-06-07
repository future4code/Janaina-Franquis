import React from 'react'
import styled from 'styled-components';


const ItemMatchContainer = styled.div`
display: flex;
align-items: center;
border-bottom: 3px #9400d3 solid;

:hover {
    background-color: #b509ff;
}
`

const Avatar = styled.img`
border-radius: 50px;
margin-right: 10px;
height: 30px;
width: 30px;
`


export default function ItemMatch(props) {
    const perfil = props.perfil
    return (
        <ItemMatchContainer>
            <Avatar src={perfil.photo}/>
            <p>{perfil.name}</p>
            
        </ItemMatchContainer>
    )
}

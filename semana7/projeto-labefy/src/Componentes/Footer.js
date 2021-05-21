import React from "react";
import styled from "styled-components";

const RodapeDiv = styled.h4`
    background-color:black;
    width: 50vw;
    height:5vh;
    color: white;
    
    margin-top:600px;
    display:flex;
    align-items: center;
    text-align:center;
    justify-content:center;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`






// Rodapé


export default class Footer extends React.Component{
    render () {
        return (
            <RodapeDiv>
                <h4>Labefy - Crie sua playlist </h4>
            </RodapeDiv>
        )
    }
}

import React from "react";
import styled from "styled-components";

const CabecalhoDiv = styled.h4`
    background-color:black;
    width: 50vw;
    height:10vh;
    color: white;
    
    margin-top:200px;
    display:flex;
    align-items: center;
    text-align:center;
    justify-content:center;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 45px;
`






//Cabeçalho


export default class Header extends React.Component{
    render () {
        return (
            <CabecalhoDiv>
                <h4>Labefy</h4>
            </CabecalhoDiv>
        )
    }
}
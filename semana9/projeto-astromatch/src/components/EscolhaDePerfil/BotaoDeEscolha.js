import React from 'react'
import styled from 'styled-components';

const ButtonContainer = styled.div`
display: flex;
justify-content: space-around;
`


export default function BotaoDeEscolha() {
    return (
        <ButtonContainer>
            <button>Não</button>
            <button>Sim</button>
        </ButtonContainer>
    )
}

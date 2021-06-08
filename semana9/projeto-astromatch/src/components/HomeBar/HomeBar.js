import React from 'react';
import styled from 'styled-components';

const HomeBarContainer = styled.div`
display: flex;
justify-content: space-between;
border-bottom: 2px solid grey;
align-items: center;
padding: 0 10px;

`



function HomeBar () {

    return (
      <HomeBarContainer>
        <button>Escolher Pessoa</button>
        <p>Imagem Astromatch</p>
        <button>Lista</button>
      </HomeBarContainer>
    );
  }
  
  
  export default HomeBar
  
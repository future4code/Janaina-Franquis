import React, { useEffect } from 'react';
import ItemMatch from './ItemMatch';
import styled from 'styled-components';
import axios from 'axios';

const ListaMatchContainer = styled.div`
padding: 8px;
`



function ListaDeMatch () {
  //GET Matches
  const matches = [
    {
      "id": "71gMbZs2txS9LDvGK5Ew",
      "age": 26,
      "name": "Anitta",
      "photo": "https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM",
      "bio": "Amo cachorros e sair para dançar. Procuro alguém animado e sem neuras."
    }
  ]
  useEffect(() => {
    axios
    .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:janaina/matches')
    
    
      
    
  }, [])
    return (
      <ListaMatchContainer>
        {matches.map((perfil) => {
          return <ItemMatch perfil = {perfil}/>
        })}

      </ListaMatchContainer>
    );
  }
  
  
  export default ListaDeMatch
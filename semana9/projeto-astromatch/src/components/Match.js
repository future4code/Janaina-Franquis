import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import "./Match.css";

function Match  (props) {
    const [Curtir, setCurtidas] = useState([])

    useEffect(() =>{
        getCurtidas(props.Curtir);
    }
    ,[props.Curtir]);

    const getCurtidas = () => {
        axios
        .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:janaina/matches')
        .then((response) => setCurtidas(response.data.Curtir))
        .catch((error) => console.log(error))
    }

    const limpar = () => {
        axios
        .put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:janaina/clear')
        .then(() => getCurtidas())
        .catch((error) => console.log(error))
    }


    const seeCurtidas = Curtir.map((pessoa) =>{
        return(
            <Li>
            <img src={pessoa.photo} alt={pessoa.name}/>
            <p>{pessoa.name}</p>
            </Li>
        )
    })

    return(
        <Container>
            <Header>
            <AccountBoxIcon onClick={() => props.proximaPagina()}/>
            <h1>Astromatch</h1>
            </Header>
        
            <Curtidas>
                {seeCurtidas}
            </Curtidas>
            <Button onClick={limpar}  startIcon={<DeleteIcon />}>Limpar Lista</Button>
        </Container>
    )
}

export default Match;
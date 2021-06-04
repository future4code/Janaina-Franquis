import React, { useEffect, useState } from "react";
import axios from "axios";


function Home (props) {
  const [perfil, setPerfil] = useState({});

  useEffect(() => {
    getEscolherPerfil(props.perfil);
  }, [props.perfil]);

  const getEscolherPerfil = () => {
    axios
      .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:janaina/person")
      .then((response) => setPerfil(response.data.profile))
      .catch((error) => console.log(error));
  };

  const perfis = () => {
    return (
      <Perfil>
        <img src={perfil.photo} alt={perfil.name} />
        <p>
          {perfil.name}, {perfil.age}
        </p>
        <span>{perfil.bio}</span>
      </Perfil>
    );
  };

  const EscolherPessoa = (escolher) => {
    const body = {
      id: perfil.id,
      choice: "",
    };
    axios
      .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/janaina/choose-person", body)
      .then((response) => getEscolherPerfil())
      .catch((error) => console.log(error));
  };

  return (
    <HomeContainer>
      <div>
      <Header>
        <h1>
          Astromatch
        </h1>
        <AddIcone
          onClick={() => props.proximaPagina()}
        />
      </Header>

      <Div>{perfil && Object.keys(perfil).length !== 0 && perfis()}</Div>
      
      <Icones>
        <IconeFavorito
          onClick={() => EscolherPessoa(true)}>
        </IconeFavorito>

        <IconeFechar
          onClick={() => EscolherPessoa(false)}>
        </IconeFechar>

      </Icones>
       </div>
    </HomeContainer>
  );
}

export default Home;

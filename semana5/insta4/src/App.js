import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

class App extends React.Component {
  render() {
    const listaDeNomes = [<p>Maia Fernandes</p>, <p>Ricardo Teixeira</p>, <p>César Augusto</p>,];
    
    return (
      <div>
        <h1>{listaDeNomes}</h1>
      </div>
    );
  }
}

/* <MainContainer>
        <Post
          nomeUsuario={"Janaina"}
          fotoUsuario={"https://picsum.photos/50/50"}
          fotoPost={"https://picsum.photos/200/150"}
        />

        <Post
          nomeUsuario={"José"}
          fotoUsuario={"https://picsum.photos/50/5"}
          fotoPost={"https://picsum.photos/200/150"}
        />

        <Post
          nomeUsuario={"Maria Eugênia"}
          fotoUsuario={"https://picsum.photos/50/50"}
          fotoPost={"https://picsum.photos/200/150"}
        />
      </MainContainer>
    );
  }
}*/

export default App;

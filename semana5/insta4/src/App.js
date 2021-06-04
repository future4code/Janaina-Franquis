import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export default class App extends React.Component {
    render () {
    return (
      <div className="app-container">
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
           
   </div>
      
    );
  }
}



import React from "react";
import Footer from "../src/Componentes/Footer";
import Header from "../src/Componentes/Header";
import styled from "styled-components";
import axios from "axios";



const createPlaylist = styled.input`

    display:flex;
    align-items: center;
    text-align:center;
    justify-content:center;

`

const BASE_URL = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";


export default class App extends React.Component{
  state = {
    playlist: [],
    inputName: ""
  };

  componentDidMount(){
    this.getPlaylists();

  }

  handleName = (event) => {
    this.setState({ inputName: event.target.value});
  }

  handleClickEnter = (event) => {
    if (event.keyCode === 13){
      this.createPlaylist();
    }
  }

  getPlaylists = () => {
    const header = {
      headers: {
        Authorization: "janaina-franquis-paiva"
      }
    }

    axios
    .get(BASE_URL, header)
    .then ((response) => { this.setState ({playlist: response.data.result.list})})
    .catch((error) => { alert(error.response.data)

    })
  }

    createPlaylist = () => {
      const header = {
        headers: {
          Authorization: "janaina-franquis-paiva"
        }
      }

      const body = {
        name: this.state.inputName
      }

      axios
    .post(BASE_URL, body, header)
    .then (() => { alert("Playlist adicionada"); this.setState ({inputName: ""}); this.getPlaylists()})
    .catch((error) => { 
      if (
        error.response.data.message === "There already is a playlist with a similiar name."
      ) {alert("Escolha outro nome para sua playlist, essa jáfoi criada")}
     

    })
    }



  render () {
    const playlistComponents = this.state.playlist.map((play) =>{
      return <li key={play.id}>{play.name} </li>
    })
      return (
          <div>
              <Header />

                <h2>Crie sua Playlist</h2>
                <createPlaylist>
                  <input onKeyDown={this.handleClickEnter} value={this.state.inputName} onChange={this.handleName} />
                  <button onClick={this.createPlaylist}>Criar</button>
                </createPlaylist>
              
              <Footer/>

           </div>

      

      )
  }
}


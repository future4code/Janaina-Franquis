import "./App.css";
import React from "react";
import axios from "axios";

export default class App extends React.Component {
  state = {
    pokemons: [],
    picture: ""
  };

  componentDidMount() {
    this.getPokemons();
  }
  // função para pegar pokemons com select
  getPokemons = async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
    );
    this.setState({ pokemons: response.data.results });
    // console.log("Pokemons", response.data.results);
  };
  getPokePicture = async (event) => {
    console.log(event.target.value);
    const url = event.target.value;
    const response = await axios.get(`${url}`);
    //console.log("resposta getPicture:", response.data.sprites.front_default);
    this.setState({picture:response.data.sprites.front_default})
  };



  
  render() {
    //console.log("Pokemons no estado:", this.state.pokemons)
    const pokeList = this.state.pokemons.map((poke) => {
      return (
        <option key={poke.name} value={poke.url}>
          {poke.name}
        </option>
      );
    });

    return (
      <div className="App">
        <h1>Pokemons</h1>
        <select onChange={this.getPokePicture}>{pokeList}<option>Selecione um pokemon</option></select>
        {this.state.picture && 
        <img src={this.state.picture} alt="foto do pokemon" />}
      </div>
    );
  }
}

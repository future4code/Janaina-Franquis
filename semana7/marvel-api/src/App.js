import React from "react";
import axios from "axios";

const hash = "26420b708047654ad3a6efedb91497f8"


export default class App extends React.Component {
  state = {
    personagens: [],
  };

  //componentDidMount() {
  //  this.getPersonagens();
  //}
//
  getPersonagens = async () => {
    const response = await axios.get(
      `http://gateway.marvel.com:443/v1/public/characters?ts=1&apikey555db98ae00aec6fd44ad802c7fc265e=&hash=${hash}`
    )
    .then((response) => {
      return response.json();
    }) 
    .the((jsonParsed) => {
      console.log(jsonParsed);

    })
  };






render() {
  const listaDePersonagens = this.state.personagens.map((person) => {
  return 

    
  });



    return (
      <div className="App">
        <h1>MARVEL</h1>
        <select onChange={this.listaDePersonagens}></select>
      </div>
    );
  }
}
////
import React from "react";
import axios from "axios";

export default class App extends React.Component {
  state = {
    activity: {},
  };

  getActivity = () => {
    axios
      .get("http://www.boredapi.com/api/activity/")
      .then((response) => {
        console.log(response.data);
        this.setState({ activity: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    //desestruturação de objeto, sendo assim no return posso deletar this.state.activity...

    const { activity, type, participants, price } = this.state.activity;

    return (
      <div className="App">
        <h1>Está entendiado?</h1>
        <button onClick={this.getActivity}>Click aqui!</button>
        <hr />
        <h3>Atividade</h3>
        <p>Nome: {activity} </p>
        <p>Tipo: {type}</p>
        <p>Participantes: {participants}</p>
        <p>Preço: ${price}</p>
      </div>
    );
  }
}

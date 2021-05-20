import React from "react";
import axios from "axios";

export default class App extends React.Component {
  //state para guarda aplicação
  state = {
    missions: []
  }


    componentDidMount(){
      this.getMissions();
    }

      getMissions = () => {
        axios
          .get("https://api.spacexdata.com/v3/missions")
          .then((response) => {
            console.log(response.data);
            this.setState({missions: response.data})
          })
          .catch((err) => {
            console.log(err);
          });
      };

  render() {
     const missionsList = this.state.missions.map((mission) => {
       return(
         <div key={mission.mission_id}>
           <p>Nome: {mission.mission_name}</p>
           <p>Fabricantes: {mission.manufacturers.map((manufacturer) => <p>{manufacturer}</p>)}</p>
           <a href={mission.wikipedia}>Link para Wikipédia</a>
          <hr />
         </div>

       )
     })


    return(
    <div className="App">
      <h1>Missões da SpaceX</h1>
      {missionsList}
    </div>
    );
  }
}

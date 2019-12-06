import React, { Component } from "react";
import axios from "axios";
import Chart from "./Chart";

export default class PlayerList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(response => {
        this.setState({
          players: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
      if(this.state.players){
          return (
            <div className="data">
                Women WorldCup Players Data
              <Chart data = {this.state.players}/>
            </div>
          );
      }else{
          return <h2>Loading...</h2>
      }
  }
}

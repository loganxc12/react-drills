import React, { Component } from "react";
import "./App.css";

class App extends Component {

  constructor() {
    super();

    this.state = {
      foods: ["cheese", "bacon", "avocado", "toast"],
      input: ""
    }  

    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(val) {
    this.setState({
      input: val
    })
  }

  render() {
    const { foods, input } = this.state;
    let foodsToDisplay = foods.filter(el => {
      return el.toLowerCase().startsWith(input.toLowerCase())
    }).map((el, i) => {
      return <h2 key={i}>{el}</h2>
    })

    return (
      <div className="App">
        <input onChange={e => this.updateInput(e.target.value)}></input>
        {foodsToDisplay}
      </div>
    )
  }

}

export default App;
























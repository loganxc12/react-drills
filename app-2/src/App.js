import React, { Component } from "react";
import "./App.css";

class App extends Component {

  constructor() {
    super();

    this.state = {
      foods: ["bacon", "cheese", "avocado", "eggs"]
    }
  }

  render() {
    
    const { foods } = this.state;
    let foodsToDisplay = foods.map((el, i) => {
      return <h2 key={i}> {el} </h2>
    })

    return (
      <div className="App">
        {foodsToDisplay}
      </div>
    )
  }

}

export default App;










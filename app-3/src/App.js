import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: ["Bacon", "Cheese", "Avocado", "Ice Cream", "Pizza"],
      userInput: ""
    }
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(e) {
    this.setState({
      userInput: e.target.value
    })
  }

  render() {
    const { foods, userInput } = this.state;
    let filteredFoods = foods.filter((el, i) => el.toLowerCase().startsWith(userInput.toLowerCase()));
    let foodsToDisplay = filteredFoods.map((el, i) => <h2 key={i}> {el} </h2>);
    return (
      <div className="App">
        <input onChange={this.updateInput}></input>
        {foodsToDisplay}
      </div>
    );
  }
}

export default App;

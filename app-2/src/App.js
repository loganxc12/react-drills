import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      myArray: ["Bacon", "Cheese", "Avocado", "Ice Cream", "Pizza"]
    }
  }
  render() {
    const { myArray } = this.state;
    let arrayListItems = myArray.map((el) => <h2 key={el.toString()}> {el} </h2>)
    return (
      <ul className="App">{arrayListItems}</ul>
    );
  }
}

export default App;

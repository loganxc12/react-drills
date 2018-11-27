import React, { Component } from "react";
import "./App.css"

class App extends Component {

  constructor() {
    super();

    this.state = {
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
    return (
      <div className="App">
        <input onChange={e => this.updateInput(e.target.value)} type="text"></input>
        <p>{this.state.input}</p>
      </div>
    )
  }

}

export default App;

























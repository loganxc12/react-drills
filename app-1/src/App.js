import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//Components
import TextBox from './TextBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: ""
    }
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(val) {
    this.setState({
      userInput: val
    })
  } 

  render() {
    const { userInput } = this.state;
    return (
      <TextBox 
        input={userInput} 
        updateTextBox={this.updateInput}
      />
    )
  }
}

export default App;

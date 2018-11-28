import React, { Component } from "react";
import "./App.css";
//Components
import Todo from "./Todo";

class App extends Component {

  constructor() {
    super();

    this.state = {
      input: "",
      todoList: ["Make breakfast", "Walk the fig"]
    }

    this.updateInput = this.updateInput.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  updateInput(val) {
    this.setState({
      input: val
    })
  }

  addTodo(todo) {
    if (todo) {
      let updatedTodoList = this.state.todoList.slice();
      updatedTodoList.push(todo);
      this.setState({
        todoList: updatedTodoList,
        input: ""
      })
    }
  }

  render() {
    const { input, todoList } = this.state;
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input value={input} onChange={e => this.updateInput(e.target.value)}></input>
        <button onClick={() => this.addTodo(input)}>Add</button>
        <Todo todos={todoList} />
      </div>
    )
  }

}

export default App;






















// import React, { Component } from 'react';
// import './App.css';
// //Component
// import Todo from './Todo';

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       list: [],
//       input: ""
//     };

//     this.handleAddTask = this.handleAddTask.bind(this);
//   }
  
//   handleInputChange(val) {
//     this.setState({ input: val})
//   }

//   handleAddTask() {
//     this.setState({
//       list: [...this.state.list, this.state.input ],
//       input: ""
//     });
//   }

//   render() {
//     let list = this.state.list.map( (element, index) => {
//       return (
//         <Todo key={ index } task={ element } />
//       )
//     })

//     return (
//       <div className="App">
//         <h1>My todo list:</h1>
//         <div>
//           <input value={this.state.input}
//                  placeholder="Enter new task"
//                  onChange={ e => this.handleInputChange( e.target.value )}
//           />
//           <button onClick={ this.handleAddTask }>Add</button>
//         </div>
//         <br/>
//         { list }
//       </div>
//     )

//   }
// }

// export default App;

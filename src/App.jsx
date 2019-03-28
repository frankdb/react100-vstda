import React, { Component } from 'react';
import NewToDo from './NewToDo.jsx';
import ViewToDo from './ViewToDo.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
    this.addToDo = this.addToDo.bind(this);
  }

  addToDo(todo, priority) {
    let newToDoItem = [todo, priority];
    this.state.todos.push(newToDoItem);
    this.setState({ todos: this.state.todos })
  }

  render() {
    return (
      <div className='container'>
        <h1>Very Simple Todo App</h1>
        <h4>Track all of the things</h4>

        <div className="row">
          <div className="col-md-4">
            <NewToDo addToDo={this.addToDo} />
          </div>

          <div className="col-md-8">
            <ViewToDo todos={this.state.todos} />
          </div>


        </div>

      </div>
    );
  }
}

export default App;

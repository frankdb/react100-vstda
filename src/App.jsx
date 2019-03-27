import React, { Component } from 'react';
import NewToDo from './NewToDo.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
    this.handleAddToDo = this.handleAddToDo.bind(this);
  }

  handleAddToDo(todo, priority) {

  }

  render() {
    return (
      <div className='container'>
        <h1>Very Simple Todo App</h1>
        <h4>Track all of the things</h4>

        <div className="row">
          <div className="col-md-4">
            <NewToDo />
          </div>

          <div className="col-md-8">
            World
          </div>


        </div>

      </div>
    );
  }
}

export default App;

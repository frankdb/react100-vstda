import React, { Component } from 'react';
import NewToDo from './NewToDo.jsx';
import ViewToDo from './ViewToDo.jsx';

const mock = [
  {
    todo: 'Pick up dry cleaning',
    priority: 2,
    completed: false,
    id: 0,
    editEnabled: false
  },
  {
    todo: 'Clean gutters',
    priority: 1,
    completed: false,
    id: 1,
    editEnabled: false
  },
  {
    todo: 'Iron suit',
    priority: 3,
    completed: false,
    id: 2,
    editEnabled: false
  }
]

let id = 3;

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: mock
    }
    this.addToDo = this.addToDo.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleCheckBox = this.toggleCheckBox.bind(this);
  }

  addToDo(todo, priority) {
    if (todo.length === 0) {
      alert('Please enter a To Do');
      return;
    }
    let newToDoItem = { todo: todo, priority: priority, completed: false, id: id, editEnabled: false };
    this.state.todos.push(newToDoItem);
    this.setState({ todos: this.state.todos });
    id++;
  }

  handleRemove(id) {
    const remainder = this.state.todos.filter((todo) => {
      if (todo.id !== id) return todo;
    });
    this.setState({ todos: remainder });
  }

  toggleCheckBox(id) {
    console.log('id', id);
    let copy = this.state.todos;
    for (let i = 0; i < copy.length; i++) {
      if (copy[i].id == id) {
        copy[i].completed = !copy[i].completed;
      }
    }
    this.setState({ todos: copy });
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
            <ViewToDo todos={this.state.todos} handleRemove={this.handleRemove} toggleCheckBox={this.toggleCheckBox} />
          </div>


        </div>

      </div>
    );
  }
}

export default App;

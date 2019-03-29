import React, { Component } from 'react';

function determinesToDoItemColor(priority) {
  if (priority == 1) {
    return "list-group-item-success";
  } else if (priority == 2) {
    return "list-group-item-warning";
  } else if (priority == 3) {
    return "list-group-item-danger";
  }
}

function handleToDoDisplay(editEnabled) {
  if (editEnabled) {
    return "none";
  } else {
    return "block";
  }
}

function handleEditFormDisplay(editEnabled) {
  if (editEnabled) {
    return "block";
  } else {
    return "none";
  }
}

class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: this.props.todo,
      priority: this.props.priority
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (e.target.name === "description") {
      this.setState({ todo: e.target.value });
    } else if (e.target.name === "priority") {
      this.setState({ priority: e.target.value });
    }
  }

  render() {
    return (
      <div>
        <li className={`list-group-item ${determinesToDoItemColor(this.props.priority)}`} style={{ display: handleToDoDisplay(this.props.editEnabled) }}>
          <input type="checkbox" checked={this.props.completed} onChange={() => this.props.toggleCheckBox(this.props.id)}></input>
          {this.props.todo}

          <div className="pull-right">
            <a className="edit-todo" style={{ cursor: 'pointer' }}>
              <i className="fas fa-edit" style={{ color: 'LightBlue' }} onClick={() => this.props.handleEdit(this.props.id)}></i>
            </a>&nbsp;&nbsp;
        <a className="delete-todo" style={{ cursor: 'pointer' }}>
              <i className="fas fa-trash-alt" style={{ color: '#951717' }} onClick={() => this.props.handleRemove(this.props.id)}></i>
            </a>
          </div>
        </li >

        <li className={`list-group-item ${determinesToDoItemColor(this.props.priority)}`} style={{ display: handleEditFormDisplay(this.props.editEnabled) }}>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea className="create-todo-text" name="description" value={this.state.todo} onChange={this.handleChange}></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="priority">Priority</label>
            <select name="priority" className="form-control" value={this.state.priority} onChange={this.handleChange}>
              <option value="select" disabled>Select a Priority</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <button className="btn btn-success" onClick={() => this.props.handleSave(this.state.todo, this.state.priority, this.props.id)}>Save</button>
        </li >
      </div >
    )
  }
}

export default ToDoItem;
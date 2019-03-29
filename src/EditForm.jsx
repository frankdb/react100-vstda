import React from 'react';

function handleEditFormDisplay(editEnabled) {
  if (editEnabled) {
    return "block";
  } else {
    return "none";
  }
}

const EditForm = props => {
  return (
    <li className={`list-group-item ${determinesToDoItemColor(props.priority)}`} style={{ display: props.handleEditFormDisplay(props.editEnabled) }}>
      <div className="form-group">
        <label htmlFor="todo">I want to..</label>
        <textarea className="create-todo-text" name="todo" value={this.state.todo} onChange={this.handleChange}></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="priority">How much of a priority is this?</label>
        <select name="priority" className="form-control create-todo-priority" value={this.state.priority} onChange={this.handleChange}>
          <option value="select" disabled>Select a Priority</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>

      <button className="btn btn-success btn-block" onClick={() => this.props.addToDo(this.state.todo, this.state.priority)}>Add</button>
    </li >
  )
}

export default EditForm;
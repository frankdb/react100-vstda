import React from 'react';
import EditForm from './EditForm.jsx';

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

const ToDoItem = props => {
  return (
    <div>
      <li className={`list-group-item ${determinesToDoItemColor(props.priority)}`} style={{ display: handleToDoDisplay(props.editEnabled) }}>
        <input type="checkbox" checked={props.completed} onChange={() => props.toggleCheckBox(props.id)}></input>
        {props.todo}

        <div className="pull-right">
          <a className="edit-todo" style={{ cursor: 'pointer' }}>
            <i className="fas fa-edit" style={{ color: 'LightBlue' }} onClick={() => props.handleEdit(props.id)}></i>
          </a>&nbsp;&nbsp;
        <a className="delete-todo" style={{ cursor: 'pointer' }}>
            <i className="fas fa-trash-alt" style={{ color: '#951717' }} onClick={() => props.handleRemove(props.id)}></i>
          </a>
        </div>
      </li >

      <li className={`list-group-item ${determinesToDoItemColor(props.priority)}`} style={{ display: handleEditFormDisplay(props.editEnabled) }}>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea className="create-todo-text" name="description" value={props.todo}></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="priority">Priority</label>
          <select name="priority" className="form-control">
            <option value="select" disabled>Select a Priority</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>

        <button className="btn btn-success" onClick={() => handleSave(props.todo, props.priority, props.id)}>Save</button>
      </li >


    </div>



  )
}

export default ToDoItem;
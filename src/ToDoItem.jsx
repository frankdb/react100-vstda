import React from 'react';

function determinesToDoItemColor(priority) {
  if (priority == 1) {
    return "list-group-item-danger";
  } else if (priority == 2) {
    return "list-group-item-warning";
  } else if (priority == 3) {
    return "list-group-item-success";
  }
}

const ToDoItem = props => {
  return (
    <li className={`list-group-item ${determinesToDoItemColor(props.priority)}`}>
      <input type="checkbox" checked={props.completed} onChange={() => props.toggleCheckBox(props.id)}></input>
      {props.todo}

      <div className="pull-right">
        <i className="fas fa-edit" style={{ color: 'LightBlue' }}></i>&nbsp;&nbsp;
        <a className="delete-todo" style={{ cursor: 'pointer' }}>
          <i className="fas fa-trash-alt" style={{ color: '#951717' }} onClick={() => props.handleRemove(props.id)}></i>
        </a>
      </div>

    </li >



  )
}

export default ToDoItem;
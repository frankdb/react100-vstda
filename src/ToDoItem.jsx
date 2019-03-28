import React from 'react';

const ToDoItem = props => {
  return (
    <p>To Do: {props.todo}, Priority: {props.priority}</p>
  )
}

export default ToDoItem;
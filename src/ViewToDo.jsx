import React from 'react';
import ToDoItem from './ToDoItem.jsx';

const ViewToDo = props => {
  return (
    <div className="card" style={{ backgroundColor: 'white' }}>
      {
        props.todos.map(todo => {
          return (
            <ToDoItem todo={todo[0]} priority={todo[1]} />
          )
        })
      }
    </div>
  )
}

export default ViewToDo;
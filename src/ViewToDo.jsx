import React from 'react';
import ToDoItem from './ToDoItem.jsx';

const ViewToDo = props => {
  return (
    <div className="card" style={{ backgroundColor: 'white', padding: '10px', borderRadius: '10px', marginBottom: '30px' }}>
      <h4>View Todos</h4>
      <ul className="list-group">
        {
          props.todos.map(item => {
            return (
              <ToDoItem key={item.id} todo={item.todo} priority={item.priority} id={item.id} handleRemove={props.handleRemove} completed={item.completed} toggleCheckBox={props.toggleCheckBox} />
            )
          })
        }
      </ul>

    </div>
  )
}

export default ViewToDo;
import React from 'react';

class NewToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      priority: null,
    }
  }

  render() {
    return (
      <div style={{ padding: '10px', backgroundColor: 'white', borderRadius: '5px' }}>
        <h4>Add New Todo</h4>

        <div className="form-group">
          <label htmlFor="todo">I want to..</label>
          <textarea name="todo"></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="priority">How much of a priority is this?</label>
          <select name="priority" className="form-control">
            <option value="select" selected disabled>Select a Priority</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>

        <button className="btn btn-success btn-block" onClick={() => props.handleAddToDo()}>Add</button>
      </div>
    )
  }
}

export default NewToDo;
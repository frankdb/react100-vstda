import React from 'react';

class NewToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      priority: 'select',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (e.target.name === "todo") {
      this.setState({ todo: e.target.value });
    } else if (e.target.name === "priority") {
      this.setState({ priority: e.target.value });
    }
  }

  render() {
    return (
      <div style={{ padding: '10px', backgroundColor: 'white', borderRadius: '5px' }}>
        <h4>Add New Todo</h4>

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
      </div>
    )
  }
}

export default NewToDo;
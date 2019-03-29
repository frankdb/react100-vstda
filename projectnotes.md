1. App component
-Class component
-State: To Do state in array
-Props: Receives none. Passed to NewToDo: addToDo function. Passed to ViewToDo: 
-Has handleNewToDo function which updates state whenever new To Do is added from NewToDo component

  1. NewToDo component
  -Class component
  -State: todo and priority
  -Props: Receives addToDo (sends new to do item and priority back to App state)

  2. ViewToDo component
  -Functional component
  -Container: holds ToDoItems

    1. ToDoItem component
    -Functional component
    -Gets To do information as props from ViewToDo and App
    -On click, to do item expands to reveal update
    -Has buttons for removing and editing item
    -Functions:
      -

Problem: Trying to get save button to work
-How do I populate edit form text area with current to do state and make that available to change?

Possible solution 1:
-Turn To Do item into class component with state
-Turn edit form into controlled component (text area and priority)
-Use ToDoItem state as arguments for handle save (this.state.todo, this.state.priority, props.id) to save changes to state in App component
-Problem: if I use props passed down as ToDoItem state, I can't change it
 -Possible solution: handleChange(e) may have been wrong which is why you couldn'nt edit it. Name=description

Possible solution 2:
-Use props.todo passed down as value for edit form text area
-Problem: 

Possible solution 3:
-Edit form component with state
-Same problems as 
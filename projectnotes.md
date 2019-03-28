1. App component
-Class component
-Holds To Do state in array. Passes To Do items down as props to ViewToDo.
-Has handleNewToDo function which updates state whenever new To Do is added from NewToDo component

  1. NewToDo component
  -Class component
  -has state, to do and priority (controlled component)
  -new to do item gets passed up to App and saved in App state

  2. ViewToDo component
  -Functional component
  -Holds to do items

    1. ToDo component
    -Functional component
    -Gets To do information as props from ViewToDo and App
    -On click, to do item expands to reveal update
    -Has buttons for removing and editing item
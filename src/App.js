import React, {useState} from "react";
import Todo from "./components/Todo";
import Form from './components/Form';
import FilterButton from "./components/FilterButton";
import {nanoid} from 'nanoid';

function App(props) {
  // The optional chaining operator (?.) enables you to read the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid.
  // You should always pass a unique key to anything you render with iteration. Nothing obvious will change in your browser, but if you do not use unique keys, React will log warnings to your console and your app may behave strangely!
  const [tasks, setTasks] = useState(props.tasks);

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !==
      task.id);
      setTasks(remainingTasks);
  }

  const taskList = tasks.map(task => (
    <Todo 
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted = {toggleTaskCompleted}
      deleteTask={deleteTask}
    />
    )
  );

  // We can't pass data from child to parent in the same way as we pass data from parent to child using standard props. Instead, we can write a function in <App /> that will expect some data from our form as an input, then pass that function to <Form /> as a prop. This function-as-a-prop is called a callback prop.
  function addTask(name) {
    const newTask = {id: 'id' + nanoid(), name: name, completed: false};
    setTasks([...tasks, newTask]);
  }

  const tasksNoun = taskList.length === 1 ? 'task' : 'tasks';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        {/* The aria-pressed attribute used in our earlier code snippet has a value of "true" because aria-pressed is not a true boolean attribute in the way checked is. */}
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">
        {headingText}
      </h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}


export default App;

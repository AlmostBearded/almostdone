import React from "react";
import TaskList from "./components/TaskList";
import "./index.css";

const App = () => {
  /** @typedef {import('./components/Task').TaskData} TaskData */

  const [tasks, setTasks] = React.useState([
    { id: 0, title: "Find a Topic for a Blog Post", done: false },
    { id: 1, title: "Draft an Outline", done: false }
  ]);

  /**
   * Set a specific task done or not done.
   * @param {number} id The task to modify
   * @param {boolean} done Whether the task is done or not
   */
  const setDone = (id, done) => {
    const newTasks = tasks.map(v => {
      v.done = v.id === id ? done : v.done;
      return v;
    });
    setTasks(newTasks);
  };

  return (
    <div className="container mx-auto">
      <div className="task-list">
        <h2>To Do</h2>
        <TaskList tasks={tasks} onSetDone={setDone} />
      </div>
    </div>
  );
};

export default App;

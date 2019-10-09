import React from "react";
import TaskList from "./components/TaskList";
import "./index.css";

const App = () => {

  /**
   * @typedef {import('./components/Task').TaskData} TaskData
   */

   /** @type {[TaskData[], React.Dispatch<React.SetStateAction<TaskData[]>>]} */
  const [tasks, setTasks] = React.useState([
    { id: 0, title: "Find a Topic for a Blog Post", done: false},
    { id: 1, title: "Draft an Outline", done: false}
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

  const undoneTasks = tasks.filter(v => !v.done);
  const doneTasks = tasks.filter(v => v.done);

  return (
    <div id="content" className="container">
      <h1 id="title">Totally Unique Todo App!</h1>

      <div className="flex flex-wrap -mx-2 -my-2">
        <div className="w-full md:w-1/2 px-2 py-2">
          <div className="task-list min-h-">
            <h2>To Do</h2>
            <TaskList tasks={undoneTasks} onSetDone={setDone} />
          </div>
        </div>

        <div className="w-full md:w-1/2 px-2 py-2">
          <div className="task-list h-full">
            <h2>Done</h2>
            <TaskList tasks={doneTasks} onSetDone={setDone} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

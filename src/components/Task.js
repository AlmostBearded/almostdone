import React from "react";

/**
 * @typedef TaskData
 * @property {number} id Id of the task
 * @property {string} title Title of the task
 * @property {boolean} done Whether or not the task is done
 */

/**
 * @typedef Props
 * @property {TaskData} task
 * @property {(done: boolean) => void} onSetDone
 */

/**
 * @param {Props} props
 */
const Task = ({ task: { done, title }, onSetDone }) => {

  const toggleDone = () => onSetDone(!done);

  return (
    <li className={`task ${done && "done"}`}>
      <input
        type="checkbox"
        name="done"
        checked={done}
        onChange={toggleDone}
      />
      {title}
    </li>
  );
};

export default Task;

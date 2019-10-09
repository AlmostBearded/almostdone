import React from "react";
import Task from "./Task";

/**
 * @typedef {import('./Task').TaskData} TaskData
 */

/**
 * @typedef Props
 * @property {TaskData[]} tasks
 * @property {(id: number, done: boolean) => void} onSetDone
 */

/**
 * @param {Props} props
 */
const TaskList = ({ tasks, onSetDone }) => {
  return (
    <ul>
      {tasks.map((v, i) => (
        <Task task={v} onSetDone={done => onSetDone(v.id, done)} key={i} />
      ))}
    </ul>
  );
};

export default TaskList;

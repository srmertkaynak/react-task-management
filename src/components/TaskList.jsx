import React from "react";
import TaskShow from "./TaskShow";

const TaskList = ({ tasks, onDelete }) => {
  return (
    <div className="task-list">
      {tasks.map((task, index) => {
        return <TaskShow task={task} key={index} onDelete={onDelete} />;
      })}
    </div>
  );
};

export default TaskList;

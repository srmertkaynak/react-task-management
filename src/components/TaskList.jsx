import React from "react";
import TaskShow from "./TaskShow";

const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task, index) => {
        return <TaskShow task={task} key={index} />;
      })}
    </div>
  );
};

export default TaskList;

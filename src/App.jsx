import { useState } from "react";
import "./App.css";
import TaskCreate from "./Components/TaskCreate";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = (title, taskDesc) => {
    const createdTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title: title,
        taskDesc: taskDesc,
      },
    ];

    setTasks(createdTasks);
  };

  const deleteTaskById = (id) => {
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(afterDeletingTasks);
  };

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h2>Görevler</h2>
      <TaskList tasks={tasks} onDelete={deleteTaskById} />
    </div>
  );
}

export default App;

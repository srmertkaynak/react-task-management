import "./App.css";
import TaskCreate from "./Components/TaskCreate";
import TaskList from "./components/TaskList";

function App() {
  const createTask = (title, taskDesc) => {
    console.log(title);
    console.log(taskDesc);
  };

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h2>Görevler</h2>
      <TaskList />
    </div>
  );
}

export default App;

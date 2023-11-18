import "./App.css";
import TaskCreate from "./Components/TaskCreate";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <TaskCreate />
      <h2>Görevler</h2>
      <TaskList />
    </div>
  );
}

export default App;

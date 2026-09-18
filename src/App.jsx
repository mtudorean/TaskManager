import { useState } from "react";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(title) {
    const newTask = { id: Date.now(), title, completed: false };
    setTasks((prev) => [...prev, newTask]);
  }

  return (
    <main>
      <h1>Task Manager</h1>
      <TaskForm onAddTask={addTask} />
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </main>
  );
}

export default App;

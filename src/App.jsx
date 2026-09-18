import { useState } from "react";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all"); 

  function addTask(title) {
    const newTask = { id: Date.now(), title, completed: false };
    setTasks((prev) => [...prev, newTask]);
  }

  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  const totalCount = tasks.length;
  const completedCount = tasks.filter((task) => task.completed).length;

  const visibleTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true; // "all"
  });

  return (
    <main>
      <h1>Task Manager</h1>
      <p>Total sarcini: {totalCount}</p>
      <p>Finalizate: {completedCount}</p>

      <TaskForm onAddTask={addTask} />

      <div>
        <button onClick={() => setFilter("all")}>Toate</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Finalizate</button>
      </div>

      {tasks.length === 0 ? (
        <p>Nu există sarcini momentan.</p>
      ) : (
        <ul>
          {visibleTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))}
        </ul>
      )}
    </main>
  );
}

export default App;

import { useState } from "react";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all"); // "all" | "active" | "completed"

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
    <main className="app">
      <h1 className="app__title">Task Manager</h1>
      <p className="app__stats">
        {totalCount} sarcini · {completedCount} finalizate
      </p>

      <TaskForm onAddTask={addTask} />

      <div className="app__filters">
        <button
          className={filter === "all" ? "is-active" : ""}
          onClick={() => setFilter("all")}
        >
          Toate
        </button>
        <button
          className={filter === "active" ? "is-active" : ""}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={filter === "completed" ? "is-active" : ""}
          onClick={() => setFilter("completed")}
        >
          Finalizate
        </button>
      </div>

      {tasks.length === 0 ? (
        <p className="app__empty">Nu există sarcini momentan.</p>
      ) : (
        <ul className="task-list">
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

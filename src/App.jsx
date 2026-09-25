import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";
import { getTasks, createTask, updateTask, deleteTask } from "./services/taskService";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all"); // "all" | "active" | "completed"
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // La incarcarea paginii, citim colectia din Local Storage
  useEffect(() => {
    try {
      setLoading(true);
      setError(null);
      const data = getTasks();
      setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // CREATE
  function addTask(title) {
    try {
      setError(null);
      const newTask = createTask(title);
      setTasks((prev) => [...prev, newTask]);
    } catch (err) {
      setError(err.message);
    }
  }

  // UPDATE
  function toggleTask(id) {
    const target = tasks.find((task) => task.id === id);
    if (!target) return;

    try {
      setError(null);
      const updated = updateTask(id, { completed: !target.completed });
      setTasks((prev) =>
        prev.map((task) => (task.id === id ? updated : task))
      );
    } catch (err) {
      setError(err.message);
    }
  }

  // DELETE
  function removeTask(id) {
    try {
      setError(null);
      deleteTask(id);
      setTasks((prev) => prev.filter((task) => task.id !== id));
    } catch (err) {
      setError(err.message);
    }
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

      {error && <p className="app__error">⚠ {error}</p>}

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

      {loading ? (
        <p className="app__empty">Se încarcă sarcinile...</p>
      ) : tasks.length === 0 ? (
        <p className="app__empty">Nu există sarcini momentan.</p>
      ) : (
        <ul className="task-list">
          {visibleTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={removeTask}
            />
          ))}
        </ul>
      )}
    </main>
  );
}

export default App;

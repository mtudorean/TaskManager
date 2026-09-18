import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [taskName, setTaskName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedName = taskName.trim();
    if (trimmedName === "") {
      return; 
    }

    onAddTask(trimmedName);
    setTaskName(""); 
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-form__input"
        placeholder="Introdu denumirea sarcinii"
        value={taskName}
        onChange={(event) => setTaskName(event.target.value)}
      />
      <button type="submit" className="task-form__button">
        Adaugă
      </button>
    </form>
  );
}

export default TaskForm;


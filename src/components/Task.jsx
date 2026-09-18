function Task({ task, onToggle, onDelete }) {
  return (
    <li className={task.completed ? "task task--completed" : "task"}>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span>{task.title}</span>
      </label>
      <button onClick={() => onDelete(task.id)}>Șterge</button>
    </li>
  );
}

export default Task;

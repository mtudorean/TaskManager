function Task({ task }) {
  return (
    <li>
      <input type="checkbox" checked={task.completed} readOnly />
      <span>{task.title}</span>
      <button>Șterge</button>
    </li>
  );
}

export default Task;

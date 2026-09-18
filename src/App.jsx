import TaskForm from "./components/TaskForm";

function App() {
  function addTask(title) {
    console.log("Sarcină adăugată:", title); // temporar
  }

  return (
    <main>
      <h1>Task Manager</h1>
      <TaskForm onAddTask={addTask} />
    </main>
  );
}

export default App;

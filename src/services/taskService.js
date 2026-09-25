const STORAGE_KEY = "tasks";

function readFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    throw new Error("Datele salvate sunt corupte și nu au putut fi citite.");
  }
}

/** Salveaza intreaga colectie de sarcini in local storage. */
function writeToStorage(tasks) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (err) {
    // localStorage.setItem poate esua daca spatiul alocat browserului e plin
    throw new Error("Nu s-au putut salva datele (Local Storage este plin sau indisponibil).");
  }
}

export function getTasks() {
  return readFromStorage();
}

/** Create */
export function createTask(title) {
  const tasks = readFromStorage();
  const newTask = { id: Date.now(), title, completed: false };
  const updatedTasks = [...tasks, newTask];
  writeToStorage(updatedTasks);
  return newTask;
}

/** Uupdate */
export function updateTask(id, updates) {
  const tasks = readFromStorage();
  const exists = tasks.some((task) => task.id === id);

  if (!exists) {
    throw new Error("Sarcina nu a fost găsită în colecție.");
  }

  const updatedTasks = tasks.map((task) =>
    task.id === id ? { ...task, ...updates } : task
  );
  writeToStorage(updatedTasks);

  return updatedTasks.find((task) => task.id === id);
}

/** Delete */
export function deleteTask(id) {
  const tasks = readFromStorage();
  const updatedTasks = tasks.filter((task) => task.id !== id);
  writeToStorage(updatedTasks);
}


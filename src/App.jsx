import { useState } from 'react';
import './App.css'

const InitialTasks = [
  { id: 1, title: "Study Javascript", completed: false },
  { id: 2, title: "Practice React", completed: true },
  { id: 3, title: "Build my project", completed: false },
  { id: 4, title: "Create my project", completed: true }
]


function App() {
  
/*Part 2*/

const [tasks, setTasks] = useState(InitialTasks);
const [newTask, setNewTask] = useState("");

function handleSubmit(event) {

  event.preventDefault();

  const title = newTask.trim();

  if (!title) {
    return;
  }

  const task = {
    id: crypto.randomUUID,
    title: title,
    completed: false,
  }

  setTasks((currentTasks) => [...currentTasks, task]);
  setNewTask("");

}

  return (
    <main>
      <h1>My Tasks</h1>
      <p className='subtitle'>
        Organize your day, one task at a time.
      </p>

      <form className='task-form' onSubmit={handleSubmit}>
        <label className='sr-only' htmlFor='task-input'>
          New Task
        </label>

        <input
          id='task-input'
          type='text'
          placeholder='What do you need to do ?'
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />

        <button type='submit'>Add Task</button>
      </form>

      <ul className='task-list'>
        {tasks.map((task) => (
          <div className='task-item' key={task.id}>
            <span className={task.completed ? "completed" : ""}>
              {task.title}
            </span>
            <span className={task.completed ? "status done" : "status"}>
              {task.completed ? "Done" : "Pending"}
            </span>
          </div>
        ))}
      </ul>
      <br />
    </main>
  );

}

export default App;

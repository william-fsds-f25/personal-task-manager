import { useState } from 'react';
import './App.css'

// Starter list shown when the app first loads (not saved after refresh)
const InitialTasks = [
  { id: 1, title: "Study Javascript", completed: false },
  { id: 2, title: "Practice React", completed: true },
  { id: 3, title: "Build my project", completed: false },
  { id: 4, title: "Create my project", completed: true }
]



function App() {
  // tasks = the list on screen; newTask = text currently typed in the input
  const [tasks, setTasks] = useState(InitialTasks);
  const [newTask, setNewTask] = useState("");

  function handleSubmit(event) {
    // Stop the browser from reloading the page on form submit
    event.preventDefault();

    const title = newTask.trim(); // remove extra spaces at both ends

    if (!title) {
      return; // ignore empty or whitespace-only input
    }

    const task = {
      id: crypto.randomUUID(), // unique id so React can track this item in the list
      title: title,
      completed: false,
    }

    // Copy the old list and append the new task (never mutate the previous array)
    setTasks((currentTasks) => [...currentTasks, task]);
    setNewTask(""); // clear the input after adding
  }

  function toggleTask(taskId){
    setTasks((currentTasks) => 
      currentTasks.map((task) =>{
        if(task.id === taskId){
          return {...task, completed: !task.completed}
        }
        else {
          return task;
        }
      }));
  
  }

  return (
    <main>
      <h1>My Tasks</h1>
      <p className='subtitle'>
        Organize your day, one task at a time.
      </p>

      <form className='task-form' onSubmit={handleSubmit}>
        {/* sr-only: visible to screen readers, hidden visually */}
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
          <li className='task-item' key={task.id}>
            <span className={task.completed ? "completed" : ""}>
              {task.title}
            </span>
            <span className={task.completed ? "status done" : "status"}>
              {task.completed ? "Done" : "Pending"}
            </span>
            <button
              type='button'
              onClick={() => toggleTask(task.id)}>
                {task.completed ? "Mark pending" : "Mark completed"}
            </button>
          </li>
        ))}
      </ul>
      <br />
    </main>
  );
}

export default App;

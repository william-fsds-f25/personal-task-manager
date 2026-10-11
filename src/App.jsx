import './App.css'

const tasks = [
  { id: 1, title: "Study Javascript", completed: false },
  { id: 2, title: "Practice React", completed: true },
  { id: 3, title: "Build my project", completed: false },
  { id: 4, title: "Create my project", completed: true }
]


function App() {

  return (
    <main>
      <h1>My Tasks</h1>
      <p className='subtitle'>Organize your day, one task at a time.</p>
      <section className='task-list'>
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
      </section>
      /*
      <br />
      <h1>My tasks</h1>
      <p>Organize your day, one task at a time</p>
      {tasks.map((task) => (
        <div className ='task-item' key={task.id}>
          <span className={task.completed ? "completed" : ""}>{task.title}</span>
          <span className={task.completed ? "status done" : "status"}>{task.completed ? "Done" : "Pending"}</span>
        </div>
      ))}
    </main>
  );

}

export default App;

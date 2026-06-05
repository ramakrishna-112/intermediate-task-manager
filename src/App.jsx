import { useState } from 'react'
import './App.css'
import {TaskForm} from "./components/TaskForm.jsx"
import {TaskList} from "./components/TaskList.jsx"

function App() {

  const [tasks, setTasks] = useState([])

  const addTask = (inputValue) => {

        if (inputValue.trim() === "") {
            return;
        }

        setTasks((prevTasks) => [...prevTasks,inputValue]);
  }

  const deleteTask = (indexToDelete) => {
    setTasks(
      tasks.filter((task, currentIndex) => {
        return currentIndex !== indexToDelete;
      })
    );
  };
  return (
  <>
  <div className="app-container">
  <h1>Task Manager</h1>

  <TaskForm addTask={addTask}/>
  <TaskList tasks={tasks} deleteTask={deleteTask}/>
  </div>
  </>
)};

export default App

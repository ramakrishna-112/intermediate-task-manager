import { useState, useEffect } from "react";
import "./App.css";
import { TaskForm } from "./components/TaskForm.jsx";
import { TaskList } from "./components/TaskList.jsx";

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = (inputValue) => {
    if (inputValue.trim() === "") {
      return;
    }

    setTasks((prevTasks) => [
      ...prevTasks,
      {
        text: inputValue,
        completed: false,
      },
    ]);
  };

  const deleteTask = (indexToDelete) => {
    setTasks(
      tasks.filter((task, currentIndex) => {
        return currentIndex !== indexToDelete;
      })
    );
  };

  const toggleTask = (indexToToggle) => {
    setTasks(
      tasks.map((task, currentIndex) => {
        if (currentIndex === indexToToggle) {
          return {
            ...task,
            completed: !task.completed,
          };
        }

        return task;
      })
    );
  };

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = totalTasks - completedTasks;

  const searchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.text
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesFilter =
      filter === "all"
        ? true
        : filter === "completed"
        ? task.completed
        : !task.completed;

    return matchesSearch && matchesFilter;
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  return (
    <div className="app-container">
      <h1>Task Manager</h1>

      <div className="task-stats">
        <p>Total: {totalTasks}</p>
        <p>Completed: {completedTasks}</p>
        <p>Pending: {pendingTasks}</p>
      </div>

      <TaskForm addTask={addTask} />

      <div className="controls">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={searchChange}
        />

        <div className="filter-buttons">
          <button
            className={filter === "all" ? "active-filter" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </button>

          <button
            className={filter === "completed" ? "active-filter" : ""}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>

          <button
            className={filter === "pending" ? "active-filter" : ""}
            onClick={() => setFilter("pending")}
          >
            Pending
          </button>
        </div>

        <p className="current-filter">
          Showing: {filter}
        </p>
      </div>

      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />
    </div>
  );
}

export default App;
import { useState } from "react";

export const TaskForm = ({ addTask }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addTask(inputValue);

    setInputValue("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter a task..."
      />

      <button type="submit">
        Add Task
      </button>
    </form>
  );
};
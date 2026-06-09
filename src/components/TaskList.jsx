export const TaskList = ({ tasks, deleteTask, toggleTask }) => {
  return (
    <>
      <h3>Task List</h3>

      {tasks.length === 0 ? (
        <p className="empty-message">No tasks added yet.</p>
      ) : (
        tasks.map((task, index) => (
          <div className="task-item" key={index}>
            <p className={task.completed ? "completed" : ""}>
              {task.text}
            </p>

            <div className="task-actions">
              <button
                className="complete-btn"
                onClick={() => toggleTask(index)}
              >
                {task.completed ? "Undo" : "Complete"}
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </>
  );
};
export const TaskList = ({ tasks, deleteTask }) => {
    return (
        <div className="task-list">
            <h3 className="task-list-title">Task List</h3>

            {tasks.length === 0 ? (
                <p className="empty-message">No tasks added yet.</p>
            ) : (
                tasks.map((task, index) => (
                    <div className="task-item" key={index}>
                        <p className="task-text">{task}</p>

                        <button
                            className="delete-btn"
                            onClick={() => deleteTask(index)}
                        >
                            Delete
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};
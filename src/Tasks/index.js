import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask }) => (
    <ul className="tasksList">
        {tasks.map(task => (
            <li key={task.id}
                className={`tasksList__item ${hideDone && task.done ? "task__item--hide" : ""}`}>
                <button className="tasks__button tasks__button--toggleDone">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`taskList__itemsText ${task.done ? "taskList__item--done" : ""}`}>
                    {task.content}
                </span>
                <button className="tasks__button tasks__button--remove"
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;
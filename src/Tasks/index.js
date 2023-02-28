import "./style.css";

const Tasks = ({tasks, hideDoneTasks}) => (
    <ul className="tasksList">
        {tasks.map(task => (
            <li key={task.id} className={`tasksList__item ${hideDoneTasks && task.done ? "task__item--hide" : ""}`}>
                <button className="tasks__button tasks__button--toggleDone">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`taskList__itemsText ${task.done ? "taskList__item--done" : ""}`}>
                    {task.content}
                </span>
                <button className="tasks__button tasks__button--remove">
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;
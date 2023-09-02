import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  };

  return (
    <form className="addNewTask" onSubmit={onFormSubmit}>
      <input
        value={newTaskContent}
        className="addNewTask__create"
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <button className="addNewTask__button">
        Dodaj zadanie
      </button>
    </form>
  )
};

export default Form;
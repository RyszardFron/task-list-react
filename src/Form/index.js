import "./style.css";

const Form = () => (
  <form className="addNewTask">
    <input className="addNewTask__create"
      placeholder="Co jest do zrobienia?" 
      autofocus />
    <button className="addNewTask__button">
      Dodaj zadanie
      </button>
  </form>
)

export default Form;
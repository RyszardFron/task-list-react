import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";

const tasks = [
  { id: 1, content: "przejść na Reacta", done: false },
  { id: 2, content: "wyjść na dwór", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <main>
      <header>
        <h1 className="taskTitle">Lista zadań</h1>
      </header>
      <section className="section">
        <header>
          <h2 className="section__title">Dodaj nowe zadanie</h2>
        </header>
        <div className="section__addTask">
          <Form />
        </div>
      </section>
      <section className="section">
        <header className="section__header">
          <h2 className="section__title">Lista zadań</h2>
          <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
        </header>
        <div className="section__addTask">
          <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
        </div>
      </section>
    </main>
  );
}

export default App;

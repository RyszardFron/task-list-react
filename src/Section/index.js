import "./style.css";

const Section  = (title) => (
    <section className="section">
    <header className="section__header">
      <h2 className="section__title">{title}</h2>
      <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
    </header>
    <div className="section__addTask">
      <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
    </div>
  </section>
);

export default Section;
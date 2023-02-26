import "./style.css";

const Buttons = (props) => (
    props.tasks.length > 0 && (
       
        <div className="section__buttons">
            <button className="buttons">
                {props.hideDoneTasks ? "Pokaż ukończone" : "Ukryj ukończone"}
            </button>
            <button className="buttons"
            disabled={props.tasks.every(({done})=> done)} 
            >
                Ukończ wszystkie </button>
        </div>
    )
);

export default Buttons;
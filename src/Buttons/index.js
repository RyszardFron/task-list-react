import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (

    <div className="section__buttons">
        {tasks.length > 0 && (
            <>
                <button className="buttons">
                    {hideDoneTasks ? "Pokaż ukończone" : "Ukryj ukończone"}
                </button>
                <button className="buttons"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div >
);


        export default Buttons;
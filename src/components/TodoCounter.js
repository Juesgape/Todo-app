import React from "react";
import "../styles/TodoCounter.css"

function TodoCounter() {
    return(
        <React.Fragment>

        <h1 className="TodoCounter">To do list </h1> 

        <div className="todo-span-container">
            <span className="todo-span">You have completed <span className="tasksCompleted">2</span> out of <span className="total-tasks">3</span> tasks</span>
        </div>

        </React.Fragment>
    )
}

export {TodoCounter}
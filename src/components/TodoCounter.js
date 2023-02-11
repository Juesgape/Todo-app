import React from "react";
import "../styles/TodoCounter.css"

function TodoCounter({totalTodos, completedTodos}) {
    return(
        <React.Fragment>

        <h1 className="TodoCounter">To do list </h1> 

        <div className="todo-span-container">
            <span className="todo-span">You have completed {completedTodos} out of {totalTodos} tasks</span>
        </div>

        </React.Fragment>
    )
}

export {TodoCounter}
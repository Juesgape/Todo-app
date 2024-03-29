import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css"

function TodoCounter() {
    const {totalTodos, completedTodos} = React.useContext(TodoContext)

    return(
        <React.Fragment>

        <h1 className="TodoCounter">To do list </h1> 

        <div className="todo-span-container">
            <span className="todo-span">You have completed <span className="completed-todos">{completedTodos}</span> out of <span className="completed-todos">{totalTodos}</span> tasks</span>
        </div>

        </React.Fragment>
    )
}

export {TodoCounter}
import React from "react";
import { todos } from "../App";
import { TodoItem } from "./TodoItem";

function TodoList() {
    return(
        todos.map(todo => (
            <TodoItem/>
        ))
    )
}

export {TodoList}
import React from "react";
import { TodoContext } from "../components/TodoContext";
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import {TodoList} from '../components/TodoList';
import { TodoButton } from '../components/TodoButton';
import { TodoItem } from '../components/TodoItem';
import { getValue } from "@testing-library/user-event/dist/utils";

function AppUI() {
    return(
        <React.Fragment>

            <TodoCounter />
            <TodoSearch/>

            <TodoContext.Consumer>
                {({
                    error, 
                    loading, 
                    searchedTodos, 
                    completeTodo, 
                    deleteTodo,
                }) => {
                    return (
                        <TodoList>
                            {error && <p>There was an error</p>}

                            {loading && <p>We are working on it, please wait...</p>}

                            {(!loading && !searchedTodos.length) && <p>Create your first TODO!</p>}

                            {searchedTodos.map(todo => {
                                <TodoItem
                                    key={todo.text}
                                    text={todo.text}
                                    completed={todo.completed}
                                    onComplete={() => completeTodo(todo.text)}
                                    onDelete={() => deleteTodo(todo.text)}
                                >

                                </TodoItem>
                            })}
                        </TodoList>
                    );
                }}
            </TodoContext.Consumer>

            <TodoButton/>

        </React.Fragment>
    )
}

export {AppUI}
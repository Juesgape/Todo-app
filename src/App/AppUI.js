import React from "react";
import { TodoContext } from "../components/TodoContext";
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import {TodoList} from '../components/TodoList';
import { TodoButton } from '../components/TodoButton';
import { TodoItem } from '../components/TodoItem';
import { getValue } from "@testing-library/user-event/dist/utils";
import { Modal } from "../Modal";

function AppUI() {
    const {
        error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext)

    return(
        <React.Fragment>

            <TodoCounter />

            <TodoSearch/>

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

            {!!openModal && (
                <Modal>
                    <p>{searchedTodos[0]?.text}</p>
                </Modal>
            )}

            <TodoButton
                setOpenModal = {setOpenModal}
                openModal = {openModal}
            />

        </React.Fragment>
    )
}

export {AppUI}
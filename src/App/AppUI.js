import React from "react";
import { TodoContext } from "../components/TodoContext";
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import {TodoList} from '../components/TodoList';
import { TodoButton } from '../components/TodoButton';
import { TodoItem } from '../components/TodoItem';
import { Modal } from "../Modal";
import { TodoForm } from "../components/TodoForm";
import { EmptyScreen } from "../components/EmptyScreen";
import { LoadingScreen } from "../components/LoadingScreen";
import { ErrorScreen } from "../components/ErrorScreen";

function AppUI() {
    const {
        error, 
        loading, 
        searchedTodos, 
        completeTodos, 
        deleteTodos,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext)

    return(
        <React.Fragment>

            <TodoCounter />

            <TodoSearch/>

            <TodoList>
                {error && <ErrorScreen></ErrorScreen>}
                {loading && <LoadingScreen></LoadingScreen>}
                {(!loading && !searchedTodos.length) && <EmptyScreen></EmptyScreen>}
                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodos(todo.text)}
                        onDelete={() => deleteTodos(todo.text)}
                    />
                    
                ))}
            </TodoList>

            {!!openModal && (
                <Modal>
                    <TodoForm/>
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
import React from "react";
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import {TodoList} from '../components/TodoList';
import { TodoButton } from '../components/TodoButton';
import { TodoItem } from '../components/TodoItem';

function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos ,
    completeTodos,
    deleteTodos
}) {
    return(
        <React.Fragment>

            <TodoCounter 
                completedTodos = {completedTodos}
                totalTodos = {totalTodos}
            />

            <TodoSearch 
                searchValue = {searchValue}
                setSearchValue = {setSearchValue}
            />

            <TodoList>

                {error && <p>An error has occurred</p>}

                {loading && <p>We're working on it, please wait...</p>}

                {(!loading && !searchedTodos
                .length) && <p>Create your first TODO!</p>}

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

            <TodoButton/>

        </React.Fragment>
    )
}

export {AppUI}
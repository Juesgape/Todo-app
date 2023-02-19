import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { defaultTodos } from "../../App";

const TodoContext = React.createContext()

function TodoProvider(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
        } = useLocalStorage('TODOS_V1', [])
    
        const [searchValue ,setSearchValue] = React.useState('')
        const [openModal, setOpenModal] = React.useState(false)
    
        const completedTodos = todos.filter(todo => !!todo.completed).length
        const totalTodos = todos.length
    
        let searchedTodos = []
    
    //searching elements by searching input
        if(searchValue === '') {
        searchedTodos = todos
        } else {
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase()
            const searchText = searchValue.toLowerCase()
    
            return todoText.includes(searchText)
        })
        }
    
        const completeTodos = (txt) => {
        const todoIndex = todos.findIndex(todo => todo.text === txt)
    
        const newTodos = [...todos]
        newTodos[todoIndex].completed = true
    
        saveTodos(newTodos)
        }
    
        const deleteTodos = (txt) => {
        let newTodos = [...todos]
        newTodos = newTodos.filter(todo => todo.text !== txt)
        saveTodos(newTodos)
        }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodos,
            deleteTodos,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>

    )
}

<TodoContext.Consumer></TodoContext.Consumer>

export {TodoContext, TodoProvider}
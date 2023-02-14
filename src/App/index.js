/* import './App.css'; */
import React from 'react';
import { AppUI } from './AppUI';

/* export const defaultTodos = [
  {text: 'Cortar patatas', completed: false},
  {text: 'Jugar futebol como Messias', completed: false},
  {text: 'Llorar', completed: false},
]; */

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false)
  const [loading, setLoading] =  React.useState(true)
  const [item, setItem] = React.useState(initialValue)

  React.useEffect(() => {
    setTimeout(() => {
      try {
        //local storage
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem


        if(!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }

        setItem(parsedItem)
        setLoading(false)

      } catch(err) {
        setError(err)
      }
    }, 1000)
  })

  
  //saving todos with local storage
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifiedItem)
      setItem(newItem)
    } catch(err) {
      setError(err)
    }
  }
  return {
    item,
    saveItem,
    loading,
    error
  };
}

function App() {

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', [])

  const [searchValue ,setSearchValue] = React.useState('')

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
    <AppUI 
      loading={loading}
      error={error}
      completedTodos = {completedTodos}
      totalTodos = {totalTodos}
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      searchedTodos = {searchedTodos}
      completeTodos = {completeTodos}
      deleteTodos = {deleteTodos}
    />
  );
}

export default App;

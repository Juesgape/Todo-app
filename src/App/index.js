/* import './App.css'; */
import React from 'react';
import { AppUI } from './AppUI';

/* export const defaultTodos = [
  {text: 'Cortar patatas', completed: false},
  {text: 'Jugar futebol como Messias', completed: false},
  {text: 'Llorar', completed: false},
]; */

function App() {

  //local storage
  const localStorageTodos = localStorage.getItem('TODOS_V1')

  let parsedTodos

  if(!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]))
    parsedTodos = []
  } else {
    parsedTodos = JSON.parse(localStorageTodos)
  }

  //saving todos with local storage
  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos)
    localStorage.setItem('TODOS_V1', stringifiedTodos)
    setTodos(newTodos)
  }

  const [todos, setTodos] = React.useState(parsedTodos)
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

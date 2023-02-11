/* import './App.css'; */
import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import {TodoList} from './components/TodoList';
import { TodoButton } from './components/TodoButton';
import { TodoItem } from './components/TodoItem';

export const defaultTodos = [
  {text: 'Cortar patatas', completed: false},
  {text: 'Jugar futebol como Messias', completed: false},
  {text: 'Llorar', completed: false},
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos)
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

    setTodos(newTodos)
  }

  const deleteTodos = (txt) => {
    let newTodos = [...todos]
    newTodos = newTodos.filter(todo => todo.text !== txt)
    setTodos(newTodos)
  }

  return (
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
  );
}

export default App;

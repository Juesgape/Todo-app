/* import './App.css'; */
import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import {TodoList} from './components/TodoList';
import { TodoButton } from './components/TodoButton';
import { TodoItem } from './components/TodoItem';

export const defaultTodos = [
  {text: 'Cortar patatas', completed: false},
  {text: 'Tomar el curso de intro a React', completed: false},
  {text: 'Llorar', completed: false},
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue ,setSearchValue] = React.useState('')

  const [filterBySearch, setFilterBySearch] = React.useState('')

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

    console.log(searchedTodos);
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
          />
        ))}
      </TodoList>

      <TodoButton/>

    </React.Fragment>
  );
}

export default App;

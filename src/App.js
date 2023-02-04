/* import './App.css'; */
import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import {TodoList} from './components/TodoList';
import { TodoButton } from './components/TodoButton';

export const todos = [
  {text: 'Cortar patatas', completed: false},
  {text: 'Tomar el curso de intro a React', completed: false},
  {text: 'Llorar', completed: false},
];

function App() {
  return (
    <React.Fragment>

      <TodoCounter />

      <TodoSearch />

      <TodoList/>

      <TodoButton/>

    </React.Fragment>
  );
}

export default App;

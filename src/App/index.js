/* import './App.css'; */
import React from 'react';
import { TodoProvider } from '../components/TodoContext';
import { AppUI } from './AppUI';

/* export const defaultTodos = [
  {text: 'Cortar patatas', completed: false},
  {text: 'Jugar futebol como Messias', completed: false},
  {text: 'Llorar', completed: false},
]; */
function App() {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;

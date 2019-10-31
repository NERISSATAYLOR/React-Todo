import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';
import Todo from './components/TodoComponents/Todo';



const App = () => {
  return (
    <>
      <h1>TodoList</h1>
      <TodoList />
    </>
  );
};

export default App;
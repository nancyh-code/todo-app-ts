import React from 'react';
import { Title } from './components/Title';
import { TodoList } from './components/TodoList';
import TodoProvider from './context/TodoProvider';

const Todo = () => {
  return (
    <TodoProvider>
      <Title />
      <TodoList />
    </TodoProvider>
  );
};

export default Todo;

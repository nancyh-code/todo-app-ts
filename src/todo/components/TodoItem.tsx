import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { Todo } from '../interfaces/interfaces';
import { useTodos } from '../hooks/useTodos';

interface props {
  todo: Todo;
}

export const TodoItem = ({ todo }: props) => {
  // const { toggleTodo } = useContext(TodoContext);

  const { toggleTodo } = useTodos();

  const handleDbClick = () => {
    toggleTodo(todo.id);
  };

  return (
    <li
      style={{
        cursor: 'pointer',
        textDecoration: todo.completed ? 'line-through' : '',
      }}
      onDoubleClick={handleDbClick}
    >
      {todo.desc}
    </li>
  );
};

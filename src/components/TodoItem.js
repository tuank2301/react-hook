import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { TodoContext } from '../contexts/TodoContext';
import { DELETE_TODOS } from '../reducers/types';

const TodoItem = ({ todo }) => {
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;
  const style = isLightTheme ? light : dark;

  // Load context todos
  // const { deleteTodo } = useContext(TodoContext);
  const { dispatch } = useContext(TodoContext);

  return (
    <li
      style={style}
      onClick={() => {
        dispatch({
          type: DELETE_TODOS,
          payload: {
            id: todo.id,
          },
        });
      }}
    >
      {todo.title}
    </li>
  );
};

export default TodoItem;

import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ThemeContext } from '../contexts/ThemeContext';
import { TodoContext } from '../contexts/TodoContext';
import { ADD_TODOS } from '../reducers/types';

const TodoForm = () => {
  const [title, setTitle] = useState('');

  const { theme } = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;
  const style = isLightTheme ? light : dark;

  const { dispatch } = useContext(TodoContext);

  // Fpr this component only
  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: ADD_TODOS,
      payload: {
        todo: {
          id: uuidv4(),
          title,
        },
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='title'
        placeholder='Enter a value...'
        onChange={onTitleChange}
        value={title}
        required
      />
      <input type='submit' value='Add' style={style} />
    </form>
  );
};

export default TodoForm;

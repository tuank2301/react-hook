import React, { createContext, useReducer, useEffect } from 'react';
import { todoReducer } from '../reducers/TodoReducer';
import { GET_TODOS, SAVE_TODOS } from '../reducers/types';

export const TodoContext = createContext();

const TodoContextProvicer = ({ children }) => {
  //State
  // const [todos, setTodos] = useState([]);

  // useReducer
  const [todos, dispatch] = useReducer(todoReducer, []);

  //UseEffect
  // useEffect(() => {
  //   const todos = localStorage.getItem('todos');
  //   if (todos) setTodos(JSON.parse(todos));
  // }, []);

  //UseEffect - useReducer
  useEffect(() => {
    dispatch({
      type: GET_TODOS,
      payload: null,
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: SAVE_TODOS,
      payload: { todos },
    });
  }, [todos]);

  // // UseEffect
  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todos));
  // }, [todos]);

  // const addTodo = (todo) => {
  //   setTodos([...todos, todo]);
  // };

  // const deleteTodo = (id) => {
  //   setTodos(todos.filter((todo) => todo.id !== id));
  // };

  const todoContextData = {
    todos,
    dispatch,
  };

  //return
  return (
    <TodoContext.Provider value={todoContextData}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvicer;

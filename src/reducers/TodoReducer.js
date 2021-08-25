import { ADD_TODOS, DELETE_TODOS, GET_TODOS, SAVE_TODOS } from './types';

export const todoReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_TODOS:
      const todos = localStorage.getItem('todos');
      if (todos) state = JSON.parse(todos);
      return state;

    case SAVE_TODOS:
      localStorage.setItem('todos', JSON.stringify(payload.todos));
      return state;

    case ADD_TODOS:
      return [...state, payload.todo];

    case DELETE_TODOS:
      return state.filter((todo) => todo.id !== payload.id);

    default:
      return state;
  }
};

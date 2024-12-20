import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from './actions';

const todoReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, { id: Date.now(), text: action.payload }] };
      
    case DELETE_TODO:
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
      
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => 
          todo.id === action.payload.id ? { ...todo, text: action.payload.newText } : todo
        )
      };
      
    default:
      return state;
  }
};

export default {
  todo: todoReducer,
};

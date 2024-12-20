import axios from 'axios';

// Todo Actions
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';  // New action for updating todos

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: text
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id
});

export const updateTodo = (id, newText) => ({
  type: UPDATE_TODO,
  payload: { id, newText }
});


// Employee Actions
export const FETCH_EMPLOYEES_REQUEST = 'FETCH_EMPLOYEES_REQUEST';
export const FETCH_EMPLOYEES_SUCCESS = 'FETCH_EMPLOYEES_SUCCESS';
export const FETCH_EMPLOYEES_FAILURE = 'FETCH_EMPLOYEES_FAILURE';

// Fetch employee list
export const fetchEmployees = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_EMPLOYEES_REQUEST });
    axios.get('https://jsonplaceholder.typicode.com/users')  // Example API endpoint
      .then((response) => {
        dispatch({ type: FETCH_EMPLOYEES_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_EMPLOYEES_FAILURE, payload: error.message });
      });
  };
};

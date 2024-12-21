import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Correct import for redux-thunk
import reducers from './reducer';
import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './employeeSlice';

const store = configureStore({
  reducer: {
    employees: employeeReducer, // Key should match what you're selecting
  },
});
const rootReducer = combineReducers(reducers);

export default store;

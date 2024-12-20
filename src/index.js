import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import store from './redux/store';
import TodoList from './TodoList';
import EmployeeList from './EmployeeList';

// Create root for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/employeelist" element={<EmployeeList />} />
      </Routes>
    </Router>
  </Provider>
);

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import TodoList from './components/TodoList';
import EmployeeList from './components/EmployeeList';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <Link to="/todolist" className="nav-link">To-Do List</Link>
        <Link to="/employeelist" className="nav-link">Employee List</Link>
      </nav>

      <Routes>
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/employeelist" element={<EmployeeList />} />
      </Routes>
    </div>
  );
}

export default App;

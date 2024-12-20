import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Welcome to the App</h1>
      <nav>
        <Link to="/todolist">To-Do List</Link> | 
        <Link to="/employeelist">Employee List</Link>
      </nav>
    </div>
  );
};

export default App;

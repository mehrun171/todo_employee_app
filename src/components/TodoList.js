import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editTodo, setEditTodo] = useState(null);
  const [editText, setEditText] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input }]);
      setInput('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const startEditing = (todo) => {
    setEditTodo(todo);
    setEditText(todo.text);
  };

  const updateTodo = () => {
    setTodos(
      todos.map((todo) =>
        todo.id === editTodo.id ? { ...todo, text: editText } : todo
      )
    );
    setEditTodo(null);
    setEditText('');
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <div className="todo-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button className="add" onClick={addTodo}>Add</button>
      </div>

      {editTodo && (
        <div className="todo-edit">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button className="update" onClick={updateTodo}>
            Update
          </button>
        </div>
      )}

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button className="edit" onClick={() => startEditing(todo)}>
              Edit
            </button>
            <button className="delete" onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

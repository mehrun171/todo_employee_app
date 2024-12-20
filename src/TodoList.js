import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, updateTodo } from './redux/actions';

const TodoList = () => {
  const [todoText, setTodoText] = useState('');
  const [editText, setEditText] = useState('');
  const [editingId, setEditingId] = useState(null);
  
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo.todos);

  const handleAddTodo = () => {
    if (todoText.trim()) {
      dispatch(addTodo(todoText));
      setTodoText('');
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleUpdateTodo = (id) => {
    if (editText.trim()) {
      dispatch(updateTodo(id, editText));
      setEditingId(null);
      setEditText('');
    }
  };

  const handleEditClick = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      
      {/* Add Todo */}
      <div className="add-todo">
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      
      {/* Todo List */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editingId === todo.id ? (
              <div>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button className="update" onClick={() => handleUpdateTodo(todo.id)}>Update</button>
              </div>
            ) : (
              <span>{todo.text}</span>
            )}
            <div>
              <button className="update" onClick={() => handleEditClick(todo)}>Edit</button>
              <button className="delete" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

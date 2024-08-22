import React, { useState } from 'react';
import './index.css';

function TodoItem({ todo, index, deleteTodo, editTodo, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(index, newText);
    setIsEditing(false);
    console.log("TodoItem")
  };

  const handleCheckboxChange = () => {
    toggleComplete(index);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={handleCheckboxChange} 
      />
      {isEditing ? (
        <input 
          type="text" 
          value={newText} 
          onChange={(e) => setNewText(e.target.value)} 
        />
      ) : (
        <span className={`todo-text ${todo.completed ? 'completed-text' : ''}`}>{todo.text}</span>
      )}
      <div className="buttons">
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={handleEdit}>Edit</button>
        )}
        <button onClick={() => deleteTodo(index)}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;

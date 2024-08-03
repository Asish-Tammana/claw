import React, { useState } from 'react';
import TodoItem from '../TodoItem';
import './index.css';

function Home() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    setTodos([...todos, { text: input, completed: false }]);
    setInput('');
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const editTodo = (index, newText) => {
    const newTodos = [...todos];
    newTodos[index].text = newText;
    setTodos(newTodos);
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>Claw Assignement - Easy</h1>
      <form onSubmit={addTodo}>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Enter a todo"
        />
        <button type="submit">Add Todo</button>
      </form>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <TodoItem 
            key={index} 
            todo={todo} 
            index={index} 
            deleteTodo={deleteTodo} 
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;

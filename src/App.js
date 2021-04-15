import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import TaskList from './components/TaskList';
import './App.css';


const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header title="ToDo List" />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TaskList 
          todos={todos} 
          setTodos={setTodos}
          setEditTodo={setEditTodo} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
// import express from "express";

// const app = express();

const App = () => {

  const [state, setState] = useState({items: [
    { id: 1, title: "hello world" },
    { id: 2, title: "Hey, use this app to see yout to do list" },
    { id: 3, title: "nice app right ?" },
  ]});

  const addTodo = (itemStr) => {
    const id = Math.floor(Math.random() * 100) + 1;
    const todoObj = { id: id, title: itemStr };
    setState({
      items: [...state.items, todoObj],
    });
  };

  const deleteTodo = (id) => {
    const updatedItems = [...state.items].filter((item) => item.id !== id);
    setState({ items: updatedItems });
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">
          My Todo App
        </a>
      </nav>
      <TodoForm addTodo={addTodo} />
      <TodoList tasks={state.items} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
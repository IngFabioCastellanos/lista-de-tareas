import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import "./App.css";

const initialState = [
  {
    id: 1,
    title: "Todo #1",
    descripcion: "desc del todo#1",
    completed: false,
  },
  {
    id: 2,
    title: "Todo #2",
    descripcion: "desc del todo#2",
    completed: true,
  },
];

export default function App() {
  const [todos, setTodos] = useState(initialState);

  const todoDelete = (todoId) => {
    const changeTodo = todos.filter((todo) => todo.id !== todoId);
    setTodos(changeTodo);
  };

  const todoToggleCompleted = (todoId) => {
    const changeTodo = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(changeTodo);
  };

  const addTodo = (todo) => {
    const newTodo = {
      ...todo,
      id: Date.now(),
      completed: false,
    };
    const changeTodo = [newTodo, ...todos];

    setTodos(changeTodo);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <TodoList
          todos={todos}
          todoDelete={todoDelete}
          todoToggleCompleted={todoToggleCompleted}
        />
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

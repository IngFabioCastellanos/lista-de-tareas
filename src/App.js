import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import "./App.css";

const initialState = [
  {
    id: 1,
    title: "Todo #1 Ejemplo",
    descripcion: "descripción de la tarea #1 de ejemplo",
    completed: false,
  },
];

const localTodos = JSON.parse(localStorage.getItem("todos"));

export default function App() {
  const [todos, setTodos] = useState(localTodos || initialState);
  const [todoEdit, setTodoEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // eliminar tarea
  const todoDelete = (todoId) => {
    if (todoEdit && todoId === todoEdit.id) {
      setTodoEdit(null);
    }
    const changeTodo = todos.filter((todo) => todo.id !== todoId);
    setTodos(changeTodo);
  };

  // Cambiar boton de terminar tarea
  const todoToggleCompleted = (todoId) => {
    const changeTodo = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(changeTodo);
  };

  const todoUpdate = (todoEdit) => {
    const changeTodo = todos.map((todo) =>
      todo.id === todoEdit.id ? todoEdit : todo
    );
    setTodos(changeTodo);
  };

  // agregar nueva tarea
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
          setTodoEdit={setTodoEdit}
        />
        <TodoForm
          addTodo={addTodo}
          todoEdit={todoEdit}
          todoUpdate={todoUpdate}
          setTodoEdit={setTodoEdit}
        />
      </div>
    </div>
  );
}

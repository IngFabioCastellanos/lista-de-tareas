import React from "react";

const Todo = ({ todo, todoDelete, todoToggleCompleted }) => {
  return (
    <div className="card mt-2 shadow">
      <div className="card-body">
        <h3 className="card-title text-right">
          {todo.title}
          <button
            onClick={() => todoToggleCompleted(todo.id)}
            className={`btn  btn-sm ${
              todo.completed ? "btn-outline-success" : "btn-success"
            } ml-2`}
          >
            {todo.completed ? "Terminado" : "Terminar"}
          </button>
        </h3>
        <p className="card-text text-right">{todo.descripcion}</p>
        <hr />
        <div className="d-flex justify-content-end">
          <button className="btn btn-outline-primary btn-sm mr-2">
            Editar
          </button>
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => todoDelete(todo.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;

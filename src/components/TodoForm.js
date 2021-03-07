import React, { useState } from "react";

const initialFormValues = {
  title: "",
  descripcion: "",
};

const TodoForm = ({ addTodo }) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState(null);
  const [successMesage, setSuccessMesage] = useState(null);

  const { title, descripcion } = formValues;

  const handleChangeInput = (e) => {
    const changeFormValues = {
      ...formValues,
      [e.target.name]: e.target.value,
    };
    setFormValues(changeFormValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") {
      setError("Debes agregar un titulo");
      setTimeout(() => {
        setError(null);
      }, 2000);
      return;
    } else if (descripcion.trim() === "") {
      setError("Debes agregar una descripción");
      setTimeout(() => {
        setError(null);
      }, 2000);
      return;
    }
    addTodo(formValues);
    setFormValues(initialFormValues);
    setSuccessMesage("Tarea agregada con exito");
    setError(null);
    setTimeout(() => {
      setSuccessMesage(null);
    }, 2000);
  };

  return (
    <div className="col-4">
      <h1>Nueva tarea</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control shadow"
            placeholder="Título..."
            name="title"
            value={title}
            onChange={handleChangeInput}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Descripción..."
            className="form-control shadow"
            name="descripcion"
            value={descripcion}
            onChange={handleChangeInput}
          ></textarea>
        </div>
        <button className="btn btn-primary btn-block">Agregar tarea</button>
      </form>
      {error && <div className="alert alert-danger mt-2">{error}</div>}
      {successMesage && (
        <div className="alert alert-primary mt-2">{successMesage}</div>
      )}
    </div>
  );
};

export default TodoForm;

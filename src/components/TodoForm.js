import React, { useEffect, useState } from "react";

const initialFormValues = {
  title: "",
  descripcion: "",
};

const TodoForm = ({ addTodo, todoEdit, todoUpdate, setTodoEdit }) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState(null);
  const [successMesage, setSuccessMesage] = useState(null);

  useEffect(() => {
    if (todoEdit) {
      setFormValues(todoEdit);
    } else {
      setFormValues(initialFormValues);
    }
  }, [todoEdit]);

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
    if (todoEdit) {
      todoUpdate(formValues);
      setSuccessMesage("Tarea actualizada con exito");
    } else {
      addTodo(formValues);
      setSuccessMesage("Tarea agregada con exito");
      setFormValues(initialFormValues);
    }
    setError(null);
    setTimeout(() => {
      setSuccessMesage(null);
    }, 2000);
  };

  const cancelEdit = () => {
    setFormValues(initialFormValues);
    setTodoEdit(null);
  };

  return (
    <div className="col-4">
      <h1>{todoEdit ? "Editar tarea" : "Nueva tarea"}</h1>
      {todoEdit && (
        <button onClick={cancelEdit} className="btn btn-warning mb-3">
          Cancelar edicion
        </button>
      )}
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
        <button className="btn btn-primary btn-block">
          {todoEdit ? "Actualizar tarea" : "Agregar tarea"}
        </button>
      </form>
      {error && <div className="alert alert-danger mt-2">{error}</div>}
      {successMesage && (
        <div className="alert alert-primary mt-2">{successMesage}</div>
      )}
    </div>
  );
};

export default TodoForm;

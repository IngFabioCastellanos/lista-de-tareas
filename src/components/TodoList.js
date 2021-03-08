import Todo from "./Todo";

const TodoList = ({ todos, todoDelete, todoToggleCompleted, setTodoEdit }) => {
  return (
    <div className="col-8">
      <h1 className="text-right">Lista de tareas</h1>
      {todos.length === 0 ? (
        <div className="alert alert-primary">Agrega alguna tarea</div>
      ) : (
        todos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            todoDelete={todoDelete}
            todoToggleCompleted={todoToggleCompleted}
            setTodoEdit={setTodoEdit}
          />
        ))
      )}
      {}
    </div>
  );
};

export default TodoList;

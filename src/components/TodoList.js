import Todo from "./Todo";

const TodoList = ({ todos, todoDelete, todoToggleCompleted }) => {
  return (
    <div className="col-8">
      <h1 className="text-right">Lista de tareas</h1>
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          todoDelete={todoDelete}
          todoToggleCompleted={todoToggleCompleted}
        />
      ))}
    </div>
  );
};

export default TodoList;

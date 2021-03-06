import TodoItem from './TodoItem';

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="TodoList">
      {todos.map(todos => (<TodoItem key={todos.id} todos={todos} setTodos={setTodos} />))}
    </div>
  );
};

export default TodoList;
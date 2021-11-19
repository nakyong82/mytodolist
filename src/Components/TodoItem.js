import { MdRadioButtonUnchecked, MdRadioButtonChecked, MdOutlineDeleteForever } from 'react-icons/md';
import './TodoItem.css';

const TodoItem = ({ todos, setTodos }) => {
  const { id, text, checked } = todos;

  const CheckChange = (id) => { 
    setTodos(todos => todos.map(todos => todos.id === id ? {...todos, checked: !todos.checked} : todos ));
  };
  
  const OnRemove = (id) => {
    setTodos((todos) => todos.filter((todos) => todos.id !== id));
  }

  return (
    <div className="TodoItem">
      <div className={checked ? "UnTodoCheck" : "TodoCheck"}>
        <div className="checkButton">{ checked ? <MdRadioButtonChecked onClick={() => CheckChange(id)} /> : <MdRadioButtonUnchecked onClick={() => CheckChange(id)} />}</div>
        <div className="text">{ text }</div> 
      </div>
      <div className="removeButton"><MdOutlineDeleteForever onClick={() => OnRemove(id)} /></div>
    </div>
  );
};

export default TodoItem;
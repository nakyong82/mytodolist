import { MdAdd } from 'react-icons/md';
import './TodoInsert.css';

const TodoInsert = ({ inputText, onChange, onClick }) => {
  return (
    <div className="TodoInsert">
      <input value = {inputText} onChange={onChange} />
      <button onClick={onClick}><MdAdd /></button>
    </div>
  )
};

export default TodoInsert;
import { MdAdd } from "react-icons/md";
import "./TodoInsert.css";

const TodoInsert = ({ inputText, onChange, onClick }) => {
  const onEnter = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div className="TodoInsert">
      <input value={inputText} onChange={onChange} onEnter={onEnter} />
      <button {...(inputText === "" ? null : (onClick = { onClick }))}>
        <MdAdd />
      </button>
    </div>
  );
};

export default TodoInsert;

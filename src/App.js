import { useState } from "react";
import "./App.css";
import Template from "./Components/Template";
import TodoList from "./Components/TodoList";
import TodoInsert from "./Components/TodoInsert";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "아침 식사", checked: true },
    { id: 2, text: "점심 식사", checked: false },
    { id: 3, text: "저녁 식사", checked: true },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(4);

  const onChange = (e) => {
    setInputText(e.target.value);
  };
  const onClick = () => {
    const nextTodos = todos.concat({
      id: nextId,
      text: inputText,
      checked: false,
    });
    setNextId(nextId + 1);
    setTodos(nextTodos);
    setInputText("");
  };

  return (
    <div className="App">
      <Template todos={todos}>
        <TodoList todos={todos} setTodos={setTodos} />
        <TodoInsert
          inputText={inputText}
          onChange={onChange}
          onClick={onClick}
        />
      </Template>
    </div>
  );
}

export default App;

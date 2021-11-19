import './Template.css';

const Template = ({ todos, children }) => {
  const todosLength = todos.length;

  return (
    <div className="Template">
      <div className="title">Todo App ({ todosLength })</div> {/* todos의 길이가 반환이 안돼넹 ..*/}
      <div className="content">{ children }</div>
    </div>
  );
};

export default Template;
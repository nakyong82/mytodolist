import './Template.css';

const Template = ({ todos, children }) => {
  const todosLength = todos.length;

  return (
    <div className="Template">
      <div className="title">Todo App ({ todosLength })</div> 
      <div className="content">{ children }</div>
    </div>
  );
};

export default Template;
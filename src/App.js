import "./App.css";
import { useRef, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const todo = useRef();

  const handleAddTodo = () => {
    const text = todo.current.value;
    const newItem = {
      text,
      completed: false,
    };
    setTodos([...todos, newItem]);
    todo.current.value = "";
  };
  const handleItemDone = (key) => {
    const newTodos = [...todos];
    newTodos[key].completed = !newTodos[key].completed;
    setTodos(newTodos);
  };

  const handleDeleteItem = (key) => {
    const newTodos = [...todos];
    newTodos.splice(key, 1);
    setTodos(newTodos);
  };

  const myStyle = {
    textDecoration: "line-through",
  };

  return (
    <>
      <div className="app-container" id="taskList">
        <h1 className="app-header">TO DO LIST</h1>
        <div className="add-task">
          <input
            type="text"
            placeholder="Add New Task"
            ref={todo}
            className="task-input"
          />
          <input
            type="submit"
            value=""
            className="submit-task"
            onClick={handleAddTodo}
            title="Add Task"
          />
        </div>
        <ul className="task-list">
          {todos.map((item, key) => {
            return (
              <li className="task-list-item" key={key}>
                <label
                  className="task-list-item-label"
                  onClick={() => handleItemDone(key)}
                  style={item.completed ? myStyle : {}}
                >
                  <span>{item.text}</span>
                </label>
                <span
                  className="delete-btn"
                  title="Delete Task"
                  onClick={() => handleDeleteItem(key)}
                ></span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;

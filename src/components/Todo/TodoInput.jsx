import { useState } from "react";
import { PlusCircleFill } from "react-bootstrap-icons";

import style from "./TodoInput.module.css";

const TodoInput = ({ onAddTask }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const onAdd = (e) => {
    e.preventDefault();
    onAddTask(task);
    document.getElementById("title").value = null;
    document.getElementById("desc").value = null;
  };

  const handleChange = (e) => {
    setTask({...task,[e.target.name]:e.target.value});
  }
  const btnStyle = {
    border: 0,
    background: "none"
  };

  return (
    <form className={style.inputForm} onSubmit={onAdd}>
      <h3>T O D O</h3>
      <input
        id="title"
        type="text"
        placeholder="Title"
        onChange={handleChange}
        value={task.title}
        name="title"
      ></input>
      <input
        id="desc"
        type="text"
        placeholder="Description"
        onChange={handleChange}
        value={task.description}
        name="description"
      ></input>

      {/* <PlusCircleFill type="submit" onClick={onAdd} color="#43B0F1" size={42} /> */}
      <button type="submit" style={btnStyle}>
      <PlusCircleFill  color="#43B0F1" size={42} />
      </button>
    </form>
  );
};

export default TodoInput;

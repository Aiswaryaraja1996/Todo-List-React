import { useState } from "react";
import { PlusCircleFill } from "react-bootstrap-icons";

import style from "./TodoInput.module.css";

const TodoInput = ({ onAddTask }) => {
  const [task, setTask] = useState({});

  const onAdd = () => {
    onAddTask(task);
    document.getElementById("title").value = null;
    document.getElementById("desc").value = null;
  };

  return (
    <div className={style.inputForm}>
      <h3>T O D O</h3>
      <input
        id="title"
        type="text"
        placeholder="Title"
        onChange={(e) => setTask({ ...task, title: e.target.value })}
      ></input>
      <input
        id="desc"
        type="text"
        placeholder="Description"
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      ></input>

      <PlusCircleFill onClick={onAdd} color="#43B0F1" size={42} />
    </div>
  );
};

export default TodoInput;

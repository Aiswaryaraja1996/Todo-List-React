import style from "./TodoItem.module.css";
import { Trash } from "react-bootstrap-icons";
import { CheckCircleFill } from "react-bootstrap-icons";

const TodoItem = ({ id, title, description, status, handleDelete,handleToggle }) => {
  return (
    <div className={style.card}>
      <div className={style.taskTitle}>
        {" "}
        <h3>{title}</h3>
      </div>

      <div className={style.content}>
        <div>
          <p>{description}</p>
          <p>Status : {status ? "Completed" : "Defined"}</p>
        </div>

        <div>
          <CheckCircleFill color={status ? "#10bc10" : "red"} size={20} onClick={()=>handleToggle(id)} />
          <Trash color="red" size={20} onClick={() => handleDelete(id)} />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;

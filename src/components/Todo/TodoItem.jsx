import style from "./TodoItem.module.css";
import { Trash } from "react-bootstrap-icons";

const TodoItem = ({ title, description, status }) => {
  return (
    <div class={style.card}>
    <div className={style.taskTitle}>  <h3>{title}</h3></div>
    
      <div className={style.content}>
      <div>
       
       <p>{description}</p>
       <p>Status : {status? "Completed" : "Defined"}</p>
     </div>

     <div class="delete">
       <Trash color="#10BC10" size={20} />
     </div>
      </div>
 
    </div>
  );
};

export default TodoItem;

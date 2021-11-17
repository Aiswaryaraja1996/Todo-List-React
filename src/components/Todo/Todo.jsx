import { useState } from "react";

import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

import style from './Todo.module.css';

const Todo = () => {
  const [todo, setTodo] = useState([]);

  const handleAddTask = ({ title, description }) => {
    const payLoad = {
      title: title,
      description: description,
      status: false,
      id: todo.length + 1,
    };

    setTodo([...todo, payLoad]);
  };

  return (
    <div className={style.container}>
    <div className={style.cardInput}>
    <TodoInput onAddTask={handleAddTask}></TodoInput>
    </div>
    <div className={style.cardList}>
      {todo.map((item) => {
        return (
         
            <TodoItem key={item.id}
              title={item.title}
              description={item.description}
              id={item.id}
              status={item.status}
            ></TodoItem>
        
        );
      })}
      </div>
    </div>
  );
};

export default Todo;

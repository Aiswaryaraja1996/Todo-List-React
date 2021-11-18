import { useState } from "react";

import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

import style from "./Todo.module.css";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const handleAddTask = ({ title, description }) => {
    const payLoad = {
      title: title,
      description: description,
      status: todo.length % 2 === 0 ? true : false,
      id: todo.length + 1,
    };

    setTodo([...todo, payLoad]);
  };

  const handleDelete = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  const handleToggle = (id) => {
    setTodo(
      todo.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };

  return (
    <div className={style.container}>
      <div className={style.cardInput}>
        <TodoInput onAddTask={handleAddTask}></TodoInput>
      </div>
      <button onClick={() => setShowCompleted(!showCompleted)}>
        {showCompleted?"HIDE COMPLETED" : "SHOW COMPLETED"}
      </button>
      <div className={style.cardList}>
        {todo
          .filter((item) => !item.status)
          .map((i) => {
            return (
              <TodoItem
                key={i.id}
                title={i.title}
                description={i.description}
                id={i.id}
                status={i.status}
                handleDelete={handleDelete}
                handleToggle={handleToggle}
              ></TodoItem>
            );
          })}
      </div>

      <div className={style.cardList}>
        {showCompleted &&
          todo
            .filter((item) => item.status)
            .map((i) => {
              return (
                <TodoItem
                  key={i.id}
                  title={i.title}
                  description={i.description}
                  id={i.id}
                  status={i.status}
                  handleDelete={handleDelete}
                  handleToggle={handleToggle}
                ></TodoItem>
              );
            })}
      </div>
    </div>
  );
};

export default Todo;

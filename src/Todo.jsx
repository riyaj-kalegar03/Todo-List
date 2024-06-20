import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Todo.css";
export default function Todo() {
  let [Todos, setTodo] = useState([
    { task: "Walk", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setnewTodo] = useState("");

  let addTodo = () => {
    setTodo((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setnewTodo("");
  };
  let updatenewTodo = (event) => {
    setnewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodo((prevTodos) => prevTodos.filter((prevTodos) => prevTodos.id != id));
  };

  let isDoneTodo = (id) => {
    setTodo((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: true };
        } else {
          return todo;
        }
      })
    );
  };
  let isDoneTodoall = () => {
    setTodo((prevTodos) =>
      prevTodos.map((todo) => {
        return { ...todo, isDone: true };
      })
    );
  };
  let deleteAll = () => {
    setTodo([]);
  };

  return (
    <div className="Todo">
      <input
        type="text"
        value={newTodo}
        name=""
        id=""
        placeholder="          Enter what to do"
        onChange={updatenewTodo}
      />
      <br />
      <br />

      <button onClick={addTodo}>Add</button>
      <br />
      <br />

      <ol>
        {Todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={
                todo.isDone
                  ? { textDecorationLine: "line-through", fontWeight: "500" }
                  : {}
              }
            >
              {todo.task}
            </span>
            &nbsp; &nbsp; &nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => isDoneTodo(todo.id)}>Mark as done</button>
            <br />
            <hr />
          </li>
        ))}
      </ol>
      <button onClick={() => isDoneTodoall()}>Mark as done all</button>
      <button onClick={() => deleteAll()}>Delete all</button>
    </div>
  );
}

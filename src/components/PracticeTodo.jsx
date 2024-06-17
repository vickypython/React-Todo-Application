import { useContext } from "react";

import { TodoContext } from "../context/TodoContext";
import { REMOVE_TODO } from "../context/action.type";

export const PracticeTodo = () => {
  const { todos, dispatch } = useContext(TodoContext);

  return (
    <>
      <div>
        <ul>
          {todos.map((todo)=> (
            <li key={todo.id}>
              {todo.todoItems}

              <span className="float-end"
                onClick={() => {
                  dispatch({
                    type: REMOVE_TODO,
                     payload: todo.id,
                  });
                }}
              >
                complete
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

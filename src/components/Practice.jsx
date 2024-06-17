import {  useContext, useState } from "react";
 import { TodoContext } from "../context/TodoContext";
import { ADD_TODO } from "../context/action.type";
import { v4 } from "uuid";
export const Practice = () => {
  const [todoItems, setTodoItems] = useState("");
 const { dispatch } = useContext(TodoContext);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoItems === "") return alert("please enter a todo");
    const todo = {
      todoItems,
      id:v4()
      
    };
    dispatch({
      type: ADD_TODO,
      payload: todo,
    })
    setTodoItems("")
  };
  return (
    <>
      
        <form  onSubmit={handleSubmit}>
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Enter todos"
            value={todoItems}
            onChange={(e) => setTodoItems(e.target.value)}
          />
          <button >Add</button>
        </form>
     
    </>
  );
};

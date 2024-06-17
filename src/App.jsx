// import { useState } from 'react'

import { useReducer } from "react";
import "./App.css";
import { Practice } from "./components/Practice";
import { PracticeTodo } from "./components/PracticeTodo";
import { TodoContext } from "./context/TodoContext";
import reducer from "./context/reducer";

function App() {
  const [todos, dispatch] = useReducer(reducer, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
       <Practice />
      <PracticeTodo />
     
    </TodoContext.Provider>
  );
}

export default App;

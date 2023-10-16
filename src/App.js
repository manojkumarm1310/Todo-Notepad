import React, { useState } from "react";
import Todo from "./Todo";
import Notepad from "./Notepad";
import ChangeTodo from "./ChangeTodo";
import ChangeNotepad from "./ChangeNotepad";
export default function App()
{
  const [page,setPage]=useState(true); 

  function pageTodo(p)
  {
    setPage(p);
  }
  function pageNotepad(p)
  {
    setPage(p);
  }
  return page ? (
    <div className="outerTodo">
      <ChangeNotepad change={pageTodo}/>
      <Todo />
    </div>
  ) : (
    <div className="outerNote">
    <ChangeTodo change={pageNotepad}/>
    <Notepad />
    </div>
  );

}
import './App.css'
import * as React from 'react';
import {TodoList} from "./Components/TodoList.jsx";
import {AddTodoForm} from "./Components/AddTodoForm.jsx";


export function App() {
    return (
        <>
            <h2>My mustDo list</h2>
            <hr/>
            <AddTodoForm/>
            <hr/>
            <TodoList/>
        </>
  )
}

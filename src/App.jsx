import './App.css'
import * as React from 'react';
import {TodoList} from "./Components/TodoList.jsx";
import {AddTodoForm} from "./Components/AddTodoForm.jsx";


export function App() {
    const [newTodo, setNewTodo] = React.useState("");
    return (
        <>
            <h2>My mustDo list</h2>
            <hr/>
            <AddTodoForm onAddTodo={setNewTodo}/>
            <p>Added to List: {newTodo}</p>
            <hr/>
            <TodoList/>
        </>
  )
}

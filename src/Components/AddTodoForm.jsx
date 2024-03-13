import React from "react";

export function AddTodoForm(props) {
   const handleAddTodo = (event) =>  {
       event.preventDefault();
       const todoTitle = event.target.title.value;
       event.target.reset();
       props.onAddTodo(todoTitle);
    }


    return (
        <>
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title: </label>
            <input id="todoTitle" name="title"></input>
            <button type="submit">Add</button>
        </form>
        </>
    )
}

import React from "react";

export function AddTodoForm(props) {
    const [inputText, setInputText] = React.useState("");
    let handleAddTodo = function (event) {
        event.preventDefault();
        let todoTitle = inputText;
        console.log(todoTitle);
        setInputText('');
        props.onAddTodo(todoTitle);
    }


    return (
        <>
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title: </label>
            <input id="todoTitle" name="title" value={inputText} onChange={(event) => setInputText(event.target.value)}></input>
            <button type="submit">Add</button>
        </form>
        </>
    )
}

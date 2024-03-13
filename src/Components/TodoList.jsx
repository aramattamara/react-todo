import * as React from 'react';
import {TodoListItem} from "./TodoLitsItem.jsx";

const toDoList = [
    {
        id: 1,
        title: "Complete assigment",
    },
    {
        id: 2,
        title: "Create project",
    },
    {
        id: 3,
        title: "Complete onboarding",
    },
]

export function TodoList() {
    return (
        <ul>
            {toDoList.map (function (item) {
                return <TodoListItem key={item.id} todo={item}/>;
            })}
        </ul>
    );
}

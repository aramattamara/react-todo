import * as React from 'react';

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

function TodoList() {
    return (
        <ul>
            {toDoList.map(function (item) {
                return <li key={item.id}>{item.title}</li>
            })}
        </ul>
    );
}

export default TodoList

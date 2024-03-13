export function TodoListItem(props) {
    const todo = props.todo
    return (
        <li> {/*Remove the key attribute*/}
            <span>{`${todo.id} ${todo.title}`}</span>
        </li>
    )
}

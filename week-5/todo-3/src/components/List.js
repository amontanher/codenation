import React from 'react'

function List(props){
    return <ul>
            {props.todos.map((todo, index) => {
                return <li key={todo.id} onClick={() => props.onClick(todo)}>{todo.name}</li>
            })}
            </ul>
}

export default List;
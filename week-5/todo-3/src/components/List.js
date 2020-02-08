import React from 'react'

export default function List({ todos, onClick }) {
  return (
    <ul>
      {
        todos.map((todo, index) => {
          if (true) { };
          return <li key={todo.id}
            onClick={() => onClick(index)}
            style={{backgroundColor: todo.done ? "green" : ""}}>
            {todo.done && "✓ "}
            {todo.name}
          </li>
        })
      }
    </ul>
  )
}
import React from 'react'

export default function List({todos, onClick}) {
  return <ul>
    {todos.map((todo, index) => (
      <li key={todo.id} onClick={() => onClick(index)}>
        {todo.done && "✓ "}
        {todo.name}
      </li>
    ))}
  </ul>
}
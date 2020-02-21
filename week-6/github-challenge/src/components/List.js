import React from 'react';

export default function List({ repositories }) {
  console.log(repositories);
  return (
    <ul data-test="repositorio">
      {repositories.map((item, index) => {
        return (
          <li key={index}>
            <h1>{item.name}</h1>
            <h2>{item.description}</h2>
            <h3>{item.language}</h3>
            <h4>{item.created_at}</h4>
          </li>
        );
      })}
    </ul>
  );
}

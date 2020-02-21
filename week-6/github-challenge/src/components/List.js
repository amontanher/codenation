import React from 'react';

export default function List({ repositories }) {
  return (
    <ul>
      {repositories.map((item, index) => {
        return (
          <li key={index} data-test="repositorio">
            <h1>{item.name}</h1>
            <h2>{item.description}</h2>
            <h3>{item.language}</h3>
            <h4>{item.created_at}</h4>
			<h5>{item.stargazers_count}</h5>
          </li>
        );
      })}
    </ul>
  );
}
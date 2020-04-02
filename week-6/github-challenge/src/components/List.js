import React from 'react';
import CardItem from './Card';

export default function List({ repositories }) {

  return (
    <div className="list-container">
      <ul>
        {repositories.map((item, index) => {
          return (
            <li key={index} className="li-card">
              <CardItem repository={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

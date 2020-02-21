import React from 'react';
import CardItem from './Card';

export default function List({ repositories }) {
  const style = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    listStyleType: 'none'
  };
  return (
    <ul style={style}>
      {repositories.map((item, index) => {
        return (
          <li key={index}>
            <CardItem repository={item} />
          </li>
        );
      })}
    </ul>
  );
}

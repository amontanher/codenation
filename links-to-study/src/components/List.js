import React from 'react';
import Item from './Item';

export default function List({ links }) {
  return (
    <div>
      {links.map((link, index) => {
        return <Item link={link} key={index} />;
      })}
    </div>
  );
}

import React from 'react';
import './../style/ItemStyle.css';

export default function Item({ link }) {
  const handleClick = url => {
    window.open(url, '_blank');
  };

  return (
    <div id="card">
      <div>{link.title}</div>
      <div>
        <button id="link" onClick={() => handleClick(link.url)}>
          ACESSAR
        </button>
      </div>
    </div>
  );
}

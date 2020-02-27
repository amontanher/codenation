import React from 'react';
import './../style/ItemStyle.css';

export default function Item({ link }) {
  return (
    <div id="card">
      <div>{link.title}</div>
      <div>{link.url}</div>
    </div>
  );
}

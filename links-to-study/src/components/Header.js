import React from 'react';
import './../style/HeaderStyle.css';

export default function Header({ size, handleChange }) {
  return (
    <div id="head">
      <div id="title">
        <h3>React</h3>
        <h4>Jornada de desafios de React</h4>
      </div>
      <div>
        <select onChange={handleChange}>
          <option value="0">Module 1</option>
          <option value="1">Module 2</option>
          <option value="2">Module 3</option>
          <option value="3">Module 4</option>
          <option value="4">Module 5</option>
          <option value="5">Module 6</option>
        </select>
      </div>
    </div>
  );
}

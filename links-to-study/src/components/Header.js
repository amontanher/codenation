import React from 'react';
import './../style/HeaderStyle.css';

export default function Header({ size, handleChange }) {
  const options = [];

  for (let i = 0; i < size; i++) {
    options.push(
      <option key={i} value={i}>
        Module {i + 1}
      </option>
    );
  }

  return (
    <div id="head">
      <div id="title">
        <h3>React</h3>
        <h4>React Challenge Journey</h4>
      </div>
      <div>
        <select onChange={handleChange}>
          <option value="NA">Select Module</option>
          {options}
        </select>
      </div>
    </div>
  );
}

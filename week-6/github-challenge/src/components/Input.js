import React from 'react';

export default function Input({ value, onChange, onKeyPress, hasError }) {
  return (
    <input
      id="outlined-search"
      type="search"
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      placeholder="Insira o nome do usuário"
      data-test="entrada"
      className="input-search">
    </input>
  );
}

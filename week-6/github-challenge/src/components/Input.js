import React from 'react';

export default function Input({ value, onChange, onKeyPress, hasError }) {
  const style = {};

  if (hasError) {
    style.border = '3px solid red';
  }

  return (
    <input
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      style={style}
      placeholder="Insira o nome do usuário"
    ></input>
  );
}

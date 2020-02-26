import React from 'react';
import { TextField } from '@material-ui/core';

export default function Input({ value, onChange, onKeyPress, hasError }) {
  const style = {};

  if (hasError) {
    style.border = '3px solid red';
  }

  return (
    <TextField
      id="outlined-search"
      type="search"
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      style={style}
      placeholder="Insira o nome do usuário"
      data-test="entrada"
    />
  );
}

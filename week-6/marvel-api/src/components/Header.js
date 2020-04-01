import React from 'react';
import Input from './Input';

export default function Header({ value, onChange, erro, onKeyPress, onClick }) {
  return (
    <div className="header-container">
      <p>Hero Search</p>
      <Input
        value={value}
        onChange={onChange}
        erro={erro}
        onKeyPress={onKeyPress}
        onClick={onClick}
      />
    </div>
  );
}
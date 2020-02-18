import React from 'react';

export default function Input({ value, onChange, onKeyPress }) {
    return (<input value={value} onChange={onChange} onKeyPress={onKeyPress} placeholder="Insira o nome do usuário"></input>)
}
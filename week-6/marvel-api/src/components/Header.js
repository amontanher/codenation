import React from 'react';
import Input from './Input';

export default function Header({ value, onChange, erro, onKeyPress}) {
    return (
        <div>
            <Input value={value} onChange={onChange} erro={erro} onKeyPress={onKeyPress}/>
        </div>
    )
}
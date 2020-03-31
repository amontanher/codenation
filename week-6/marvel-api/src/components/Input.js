import React from 'react';

export default function Input({ value, onChange, erro, onKeyPress }) {
    // const { value, onChange } = props; - JS DESTRUCTOR

    const temErro = Boolean(erro)

    const style = {};

    if (temErro) {
        style.border = "1px solid red";
    };

    return (
        <div className="search-input">
            <input style={style} type="text" value={value} onChange={onChange} onKeyPress={onKeyPress} />
            <p>{erro}</p>
        </div>
    )
}
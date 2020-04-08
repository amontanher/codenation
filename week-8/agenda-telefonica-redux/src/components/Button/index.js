import React from 'react'
import { FaPlus, FaSave } from 'react-icons/fa';

export default function Button({ icon, title, color, click }) {
    const style = {
        backgroundColor: color,
        color: 'white',
        border: 0,
        borderRadius: 5,
        padding: 5,
        cursor: 'pointer'
    };

    return <button style={style} onClick={click}>
        {icon === 'FaPlus' ? <FaPlus /> : <FaSave />}
        {title}
    </button>
}
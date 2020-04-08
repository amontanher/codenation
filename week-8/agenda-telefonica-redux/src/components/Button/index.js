import React from 'react'
import { FaPlus, FaSave } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Button({ icon, title, color, click }) {
    const style = {
        backgroundColor: color,
        color: 'white',
        border: 0,
        borderRadius: 5,
        padding: 5,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none'
    };

    return <Link style={style} to={click}>{icon === 'FaPlus' ? <FaPlus /> : <FaSave />} {title}</Link>
}
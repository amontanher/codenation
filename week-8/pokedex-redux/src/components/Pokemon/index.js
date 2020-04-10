import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';

export default function Pokemon({ id, name, url, type }) {
    return (
        <div className={`${type[0]}`} style={{borderRadius: '10px'}}>
            <div className="pokemon-container">
                <img src={url} alt={name} />
                <Link to={`/pokemon/${id}`} className="pokemon-link">{name}</Link>
            </div>
        </div>
    );
}
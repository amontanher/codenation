import React from 'react';
import NotFoundImg from '../../assets/notfound.png';
import { Link } from 'react-router-dom';

import './styles.css';

export default function NotFound() {
    return <div className="nf-container">
        <img src={NotFoundImg} />
        <h3>Uh-oh!</h3>
        <p>You look lost on your journey!</p>
        <Link className="back-link" to="/">Go Back Home</Link>
    </div>;
}
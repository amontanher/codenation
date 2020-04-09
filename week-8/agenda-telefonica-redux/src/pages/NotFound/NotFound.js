import React from 'react'
import { Link } from 'react-router-dom';

import NotFoundImg from '../../assets/notfound.png';

export default function NotFound() {
    const style = {
        textDecoration: 'none',
        display: 'flex',
        justifyContent: 'center',
        color: '#6454E1'
    }

    return <div className="container">
        <div className="no-contacts" >
            <img src={NotFoundImg} alt="Contact Not Found" />
        </div>
        <Link to="/" style={style}>Go Back Home</Link>
    </div>;
}
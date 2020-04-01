import React from 'react';
import NotFoundImg from '../assets/notfound.png';

export default function NotFound() {
    return (
        <div className="notfound-container">
            <img src={NotFoundImg} alt="Hero Not Found" width="400"></img>
        </div>
    );
}
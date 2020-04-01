import React from 'react';
import { FiTrash2 } from "react-icons/fi";

export default function Input({ value, onChange, onKeyPress, onClick }) {
    // const { value, onChange } = props; - JS DESTRUCTOR

    return (
        <div className="search-input">
            <input type="text" value={value} onChange={onChange} onKeyPress={onKeyPress} />
            <span>
                <FiTrash2
                    size={24}
                    color="white"
                    onClick={onClick} />
            </span>
        </div>
    )
}
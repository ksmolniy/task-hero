import React from 'react';
import './style.css';

const Avatar = ({src, click, selected}) => {

    return (
        <div onClick={click} className={`avatar ${selected ? 'selected' : ''}`}>
            <img src={src} />
        </div>
    )
}

export default Avatar;
import React from 'react';
import Avatar from '../Avatar'
import './style.css'

const LinkAvatarSelector = ({ select, selected, isCustom }) => {
    return (
        <div className="link-avatar-selector">
            <div className="link-avatar-selector__avatar">
                <Avatar src={isCustom ? (selected ? selected : undefined) : undefined} selected={isCustom}/>
            </div>
            <div className="link-avatar-selector__input">
                <input type="text" onChange={(e)=>select(e.target.value)} placeholder="Insert link to custom avatar" />
            </div>
        </div>
    );
}

export default LinkAvatarSelector;
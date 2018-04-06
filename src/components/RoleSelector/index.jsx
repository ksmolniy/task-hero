import React from 'react';
import './style.css'


const RoleSelector = ({roles, check}) => {
    return (
        <div className="role-selector">
            <div className="role-selector__header">
                Choose your role
            </div>
            <div className="role-selector__roles">
                {roles.map((item,i)=><label> <input type="radio" name="role" value={item} onChange={()=>{check(item)}}/> {item}</label>)}
            </div>
        </div>
    )
}

export default RoleSelector;
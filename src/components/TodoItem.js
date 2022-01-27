import React from 'react';

export default function TodoItem({text, completed}) { 
    return(
        <div className = 'TodoItem'>
            <label>{text}</label>
            <input type="checkbox" checked={completed}></input>
        </div>
    )
}
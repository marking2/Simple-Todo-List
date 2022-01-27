import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({items}){ //text: string, completed: boolean
    return(
        <div className='TodoList'>
            {items.map(({text, completed}) => <TodoItem text={text} completed={completed}/>)}
        </div>
    );
}
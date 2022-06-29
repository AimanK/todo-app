import React from 'react'
import './Todo.css';

function Todo() {
    return (
        <div className="todo">
            <ul>
                <li>This is an example todo</li>
                <button className="btn">edit</button> 
                <button className="btn">delete</button>
                <li>Another todo</li>
            </ul>
            
        </div>
    )
}

export default Todo

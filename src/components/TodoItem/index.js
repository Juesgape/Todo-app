import React from "react";
import './TodoItem.css'
import {FaRegTimesCircle} from 'react-icons/fa'
import {FaRegThumbsUp} from 'react-icons/fa'

function TodoItem(props) {
    
    return(
        <li className="todo-items">
            <div>
                <FaRegThumbsUp className={props.completed ? 'completedTaskIsTrue' : 'completedTaskIcon'}
                onClick={props.onComplete}
                />

                <p className={props.completed ? 'completeIsTrue' : ''}>
                    {props.text} 
                </p>

                <FaRegTimesCircle className="deleteTask"
                onClick={props.onDelete}
                />
            </div>
        </li>
    )
}

export {TodoItem}
import React from "react";
import '../styles/TodoItem.css'
import {FaRegTimesCircle} from 'react-icons/fa'
import {FaRegThumbsUp} from 'react-icons/fa'

function TodoItem(props) {
    return(
        <li className="todo-items">
            <div>
                <FaRegThumbsUp className="completedTask"></FaRegThumbsUp>
                <p>{props.text}</p>
                <FaRegTimesCircle className="deleteTask"></FaRegTimesCircle>
            </div>
        </li>
    )
}

export {TodoItem}
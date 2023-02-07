import React from "react";
import '../styles/TodoItem.css'
import {FaRegTimesCircle} from 'react-icons/fa'
import {FaRegThumbsUp} from 'react-icons/fa'

function TodoItem(props) {
    const onComplete = () => {
        alert('Has completado la tarea!')
    }

    const onDelete = () => {
        alert('Tarea borrado exitosamente!')
    }

    return(
        <li className="todo-items">
            <div>
                <FaRegThumbsUp className="completedTask"
                onClick={onComplete}
                />

                <p>{props.text}</p>

                <FaRegTimesCircle className="deleteTask"
                onClick={onDelete}
                />
            </div>
        </li>
    )
}

export {TodoItem}
import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm() {

    const [newTodoValue, setNewTodoValue] = React.useState('')
    const [totalCharacters, setTotalCharacters] = React.useState(0)

    const {
        addTodos,
        setOpenModal
    } = React.useContext(TodoContext)

    const onChange = (event) => {

        if(event.target.value.length > 40) {
            return ''
        } else {
            setTotalCharacters(event.target.value.length)
            setNewTodoValue(event.target.value)
        }
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        //Preventing empty task
        if(newTodoValue.length <= 0) {
            return ''
        } else {
            addTodos(newTodoValue)
            setOpenModal(false)
        }
    }

    return(
        <div className="form-container">
            <form onSubmit={onSubmit}>

                <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cortar la papa para el almuerzo"></textarea>

                <div className="total-wrote-container">
                    {totalCharacters} / 40
                </div>

                <div className="buttons-container">
                    <button 
                    onClick={onCancel}
                    type='button'>
                        Cancel
                    </button>

                    <button 
                    type='submit'>
                        Add
                    </button>
                </div>

            </form>
        </div>
    );
}

export { TodoForm }
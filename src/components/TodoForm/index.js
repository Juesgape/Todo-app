import React from "react";
import { TodoContext } from "../TodoContext";

function TodoForm() {

    const [newTodoValue, setNewTodoValue] = React.useState('')

    const {
        addTodos,
        setOpenModal
    } = React.useContext(TodoContext)

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodos(newTodoValue)
        setOpenModal(false)
    }

    return(
        <form onSubmit={onSubmit}>
            <label></label>

            <textarea 
            value={newTodoValue}
            onChange={onChange}
            placeholder="Cortar la papa para el almuerzo"></textarea>

            <div>
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
    );
}

export { TodoForm }
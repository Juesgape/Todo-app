import React from "react";
import './TodoButton.css'

function TodoButton(props) {
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState)
    }

    return(           
            <button className="add-button"
            onClick={onClickButton}
            >
                +
                
            </button>
    )
}

export {TodoButton}
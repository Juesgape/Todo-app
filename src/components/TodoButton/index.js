import React from "react";
import './TodoButton.css'

function TodoButton(props) {
    const onClickButton = () => {
        props.setOpenModal(!props.openModal)
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
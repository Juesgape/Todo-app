import React from "react";
import './TodoButton.css'

function TodoButton(props) {
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState)
    }

    return(    

        <div className="button-container">

            <button className="add-button"
            onClick={onClickButton}
            >
                +
                
            </button>

        </div>
    )
}

export {TodoButton}
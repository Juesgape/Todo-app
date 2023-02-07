import React from "react";
import '../styles/TodoButton.css'

function TodoButton() {
    const onClickButton = (msg) => {
        console.log(msg);
    }

    return(
            <button className="add-button"
            onClick={() => onClickButton('Jejeje')}
            >
                +
                
            </button>
    )
}

export {TodoButton}
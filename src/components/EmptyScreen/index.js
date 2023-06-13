import React from "react";
import emptyBox from '../../assets/icon-empty-box.png'
import './EmptyScreen.css'

function EmptyScreen() {
    return(
        <div className="empty-screen-container">

            <div className="text-container">
                <p>Create your first TODO!</p>
            </div>

            <div className="Image-container">
                <figure>
                    <img alt="Empty-box" src={emptyBox}/>
                </figure>
            </div>

        </div>
    )
}

export {
    EmptyScreen
}
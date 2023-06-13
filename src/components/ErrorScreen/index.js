import React from "react";
import notFoundError from '../../assets/icon-error.png'
import './ErrorScreen.css'

function ErrorScreen() {
    return(
        <div className="error-screen-container">
            <div className="img-error-container">
                <figure>
                    <img src={notFoundError}></img>
                </figure>
            </div>
            <div className="error-message">
                <span>Oops, an Error has ocurred! <br></br> Please try again later</span>
            </div>
        </div>
    )
}

export {ErrorScreen}
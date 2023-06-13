import React from "react";
import './LoadingScreen.css'

function LoadingScreen() {
    return (
        <div className="snippet-container">
            <div className="snippet" data-title="dot-pulse">
                <div className="stage">
                    <div className="dot-pulse"></div>
                </div>
            </div>
        </div>
    )
}

export {LoadingScreen}
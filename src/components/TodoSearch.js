import React from "react";
import '../styles/TodoSearch.css'

function TodoSearch() {
    return(
        <div className="search-todo-container">
            <input className="search-todo" placeholder='Patata'></input>
        </div>
    )
}

export {TodoSearch}
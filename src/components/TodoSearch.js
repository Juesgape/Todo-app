import React from "react";
import '../styles/TodoSearch.css'
import {FaSearch} from 'react-icons/fa'

function TodoSearch() {
    return(
        <div className="search-todo-main-container">
            <div className="search-todo-container">
                <input className="search-todo" placeholder='Buscar...'></input>
                <FaSearch className="search-icon"></FaSearch>
            </div>
        </div>
    )
}

export {TodoSearch}
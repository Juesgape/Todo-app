import React from "react";
import '../styles/TodoSearch.css'
import {FaSearch} from 'react-icons/fa'

function TodoSearch() {
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
    }

    return(
        <div className="search-todo-main-container">
            <div className="search-todo-container">

                <input className="search-todo" placeholder='Buscar...'
                onChange={onSearchValueChange}
                />
                
                <FaSearch className="search-icon"></FaSearch>
            </div>
        </div>
    )
}

export {TodoSearch}
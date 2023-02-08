import React from "react";
import '../styles/TodoSearch.css'
import {FaSearch} from 'react-icons/fa'

function TodoSearch() {
    const [searchValue, setSearchValue] = React.useState('')

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value)
    }

    return[
        <div className="search-todo-main-container">
            <div className="search-todo-container">

                <input className="search-todo" placeholder='Buscar...'
                value={searchValue}
                onChange={onSearchValueChange}
                />
                
                <FaSearch className="search-icon"></FaSearch>
            </div>
        </div>,
        <p>{searchValue}</p>
    ]
}

export {TodoSearch}
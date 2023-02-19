import React from "react"
import './TodoSearch.css'
import {FaSearch} from 'react-icons/fa'
import { TodoContext } from "../TodoContext"

const hideTodoSearch = {
    border: 'none',
    background: 'none',
    backgroundColor: 'none',
}

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext)

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value)
    }

    return(
        
        <div className="search-todo-main-container">
            <div className="search-todo-container">

                <input className="search-todo" placeholder='Buscar...'
                value={searchValue}
                onChange={onSearchValueChange}
                />
                
                <FaSearch className="search-icon"></FaSearch>
            </div>
        </div>
    )
}

export {TodoSearch}
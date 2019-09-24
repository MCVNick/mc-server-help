import React from 'react'

const Search = ({search, onSearch}) => {
    return (
        <div>
            <input value={search} onChange={(e) => onSearch(e.target.value)}/>
        </div>
    )
}

export default Search
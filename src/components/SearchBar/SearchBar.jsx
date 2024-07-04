import React from 'react';
import './SearchBar.css'

function SearchBar() {
    return (
        <div className='search-bar'>
                <input placeholder='Enter a song name' type="text" />
                <button>Search</button>
        </div>
    )
}


export default SearchBar;
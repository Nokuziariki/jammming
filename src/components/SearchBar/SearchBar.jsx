import React from 'react';
import './SearchBar.css'

function SearchBar() {
    return (
        <div>
            <div>
                <input placeholder='Enter a song name' type="text" />
                <button>Search</button>
            </div>
        </div>
    )
}


export default SearchBar;
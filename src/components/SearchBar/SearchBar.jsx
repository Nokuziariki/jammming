import React from 'react';
import SearchResults from '../SearchResults/SearchResults';

function SearchBar() {
    return (
        <div>
            <input placeholder='Enter a song name' type="text" />
            <button>Search</button>
            <SearchResults />
        </div>
    )
}


export default SearchBar;
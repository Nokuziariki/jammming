import React, { useState, useCallback } from 'react';
import './SearchBar.css'

const SearchBar = ({ onSearch }) => {
    const [term, setTerm] = useState("");
  
    const handleTermChange = useCallback((event) => {
      setTerm(event.target.value);
    }, []);
  
    const search = useCallback(() => {
      onSearch(term);
      setTerm("");
    }, [onSearch, term]);
  
    return (
        <div className='search-bar'>
                <input
                    placeholder='Enter a song name'
                    style={{textAlign: "center"}}
                    type="text"
                    onChange={handleTermChange}
                    value={term}
                />
                <button onClick={search}>Search</button>
        </div>
    );
}


export default SearchBar;
import React, { useState, useCallback } from 'react';
import './SearchBar.css'

const SearchBar = ({ onSearch }) => {
    const [term, setTerm] = useState("");
  
    const handleTermChange = useCallback((event) => {
      console.log("Input változott: ", event.target.value);  // Debug log
      setTerm(event.target.value);
    }, []);
  
    const search = useCallback(() => {
      console.log("Keresés indult a kifejezéssel: ", term);  // Debug log
      onSearch(term);
      setTerm("");
    }, [onSearch, term]);
  
    const handleSearch = (e) => {
      if (e.key === "Enter") {
        console.log("Enter billentyű lenyomva");  // Debug log
        search();
      }
    };

    return (
        <div className='search-bar'>
                <input
                    placeholder='Enter a song name'
                    style={{textAlign: "center"}}
                    type="text"
                    onChange={handleTermChange}
                    onKeyDown={handleSearch}
                    value={term}
                />
                <button onClick={search}>Search</button>
        </div>
    );
}


export default SearchBar;
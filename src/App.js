import React from 'react';
import SearchBar from './components/SearchBar/SearchBar'
import Playlist from './components/Playlist/Playlist';
import SearchResults from './components/SearchResults/SearchResults';
import './App.css';

function App() {
  return ( 
    <div>
      <div className='header'>
        <h1 className='title'>Ja<span className='coloredtext'>mmm</span>ing</h1>
      </div>
      <div className='app'>
        <div className='app-search'>
          <SearchBar className='searchbar'/>
        </div>
        <div className='app-lists'>
          <SearchResults />
          <Playlist />
        </div>
      </div>
    </div>
  )
}

export default App;

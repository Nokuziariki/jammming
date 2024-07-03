import React from 'react';
import SearchBar from './components/SearchBar/SearchBar'
import Playlist from './components/Playlist/Playlist';
import SearchResults from './components/SearchResults/SearchResults';
import './App.css';

function App() {
  return (
      <div>
          <div>
              <h1 className="jammmingtitle">Ja<span className='mmm'>mmm</span>ing</h1>
          </div>
          <SearchBar />
          <SearchResults />
          <Playlist />
      </div>
  )
}

export default App;

import React, { useCallback, useState } from "react";
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import Playlist from './components/Playlist/Playlist';
import SearchResults from './components/SearchResults/SearchResults';
import { Spotify } from "./utilities/Spotify/Spotify";

function App() {
    const [searchResults, setSearchResults] = useState([]);
    const [playlistName, setPlaylistName] = useState("");
    const [playlistTracks, setPlaylistTracks] = useState([]);

    const search = useCallback((term) => {
      console.log("Spotify keresés indult");  // Debug log
        Spotify.search(term).then(results => {
            setSearchResults(results);
        });
    }, []);

    const updatePlaylistName = useCallback((name) => {
      setPlaylistName(name)
    }, []);

    const savePlaylistName = useCallback(() => {
        console.log("Lejátszási lista mentve");  // Debug log
        const trackURI = playlistTracks.map((track) => track.uri)
        Spotify.savePlaylistName(playlistName, trackURI).then(() => {
            setPlaylistName("New Playlist");
            setPlaylistTracks([]);
        });
    }, [playlistName, playlistTracks]);

    const addTrack = useCallback((track) => {
      console.log("Dal hozzáadva: ", track.artist, "-", track.name);  // Debug log
      if (!playlistTracks.find(prevTrack => prevTrack.id === track.id)) {
          setPlaylistTracks(prevTracks => [...prevTracks, track]);
      }
    }, [playlistTracks]);

    const removeTrack = useCallback((track) => {
      console.log("Dal törölve: ", track.artist, "-", track.name);  // Debug log
      setPlaylistTracks((prevTracks) => 
        prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
      );
    }, []);

    return (
        <div>
            <h1 className='title'>Ja<span className='coloredtext'>mmm</span>ing</h1>
            <div className='app'>
                <div className='app-search'>
                    <SearchBar className='searchbar'
                    onSearch={search}
                    />
                </div>
                <div className='app-lists'>
                    <SearchResults
                        searchResults={searchResults}
                        onAddTrack={addTrack}
                    />
                    <Playlist
                        playlistName={playlistName}
                        playlistTracks={playlistTracks}
                        onNameChange={updatePlaylistName}
                        onRemoveTrack={removeTrack}
                        onSave = {savePlaylistName}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
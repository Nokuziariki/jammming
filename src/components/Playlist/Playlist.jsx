import React from 'react';
import TrackList from '../TrackList/TrackList';
import './Playlist.css';

function Playlist({ playlistName, playlistTracks, onNameChange, onAddTrack , onRemoveTrack}) {
    const handleNameChange = (event) => {
        onNameChange(event.target.value);
    };

    return (
        <div className='playlist'>
            <input
                value={playlistName}
                onChange={handleNameChange}
                placeholder="Name ur Playlist"
                style={{textAlign: "center"}}
            />
            <TrackList
                tracks={playlistTracks}
                onAddTrack={onAddTrack}
                onRemoveTrack={onRemoveTrack}
            />
            <button className='playlist-button'onClick={() => console.log("Save to Spotify clicked")}>
                Save to Spotify
            </button>
        </div>
    );
}

export default Playlist;
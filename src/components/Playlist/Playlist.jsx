import React, { useCallback } from 'react';
import TrackList from '../TrackList/TrackList';
import './Playlist.css';

const Playlist = ({ onNameChange, playlistTracks, onRemoveTrack, onSave }) => {
    const handleNameChange = useCallback(
      (event) => {
        onNameChange(event.target.value);
      },
      [onNameChange]
    );

    return (
        <div className='playlist'>
            <input
                onChange={handleNameChange}
                placeholder="Name your playlist"
                defaultValue={"New Playlist"}
                style={{textAlign: "center"}}
            />
            <TrackList
                tracks={playlistTracks}
                onRemoveTrack={onRemoveTrack}
                isRemoval={true}
            />
            <button className='playlist-button' onClick={onSave}>
                Save to Spotify
            </button>
        </div>
    );
}

export default Playlist;
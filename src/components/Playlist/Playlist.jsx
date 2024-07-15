import React, { useCallback } from 'react';
import TrackList from '../TrackList/TrackList';
import './Playlist.css';

const Playlist = (props) => {
    const handleNameChange = useCallback(
      (event) => {
        props.onNameChange(event.target.value);
      },
      [props.onNameChange]
    );

    return (
        <div className='playlist'>
            <input
                onChange={handleNameChange}
                placeholder="Name ur Playlist"
                defaultValue={"New Playlist"}
                style={{textAlign: "center"}}
            />
            <TrackList
                tracks={props.playlistTracks}
                onAddTrack={props.onAddTrack}
                onRemoveTrack={props.onRemoveTrack}
            />
            <button className='playlist-button' onClick={props.onSave}>
                Save to Spotify
            </button>
        </div>
    );
}

export default Playlist;
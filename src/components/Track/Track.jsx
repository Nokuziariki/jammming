import React from 'react';
import "./Track.css";

function Track({ name, artist, album, albumArt, isRemoval, onAddTrack, onRemoveTrack}) {

    const handleAddTrack = (track) => {
        onAddTrack(track);
    };

    const handleRemoveTrack = (track) => {
        onRemoveTrack(track);
    };

    return (
        <div className='Track'>
            <div className='album-picture'>
                <img src={albumArt} alt={`${album} album cover`} id='album-art'/>
            </div>
            <div className='Track-info'>
                <h3>{name}</h3>
                <p>{artist} | {album}</p>
            </div>
            {isRemoval ? (
                <button className='Track-action' onClick={handleRemoveTrack}>-</button>
            ) : (
                <button className='Track-action' onClick={handleAddTrack}>+</button>
            )}
        </div>
    );
}

export default Track; 
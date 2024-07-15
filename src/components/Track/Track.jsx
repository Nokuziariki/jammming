import React from 'react';

function Track({ name, artist, album, onAddTrack, onRemoveTrack}) {

    const handleAddTrack = (track) => {
        onAddTrack(track);
    };


    const handleRemoveTrack = (track) => {
        onRemoveTrack(track);
    };

    return (
        <div>
            <h3>{name}</h3>
            <p>{artist} - {album}</p>
            <button onClick={handleAddTrack}>+</button>
            <button onClick={handleRemoveTrack}>-</button>
        </div>
    );
}

export default Track; 
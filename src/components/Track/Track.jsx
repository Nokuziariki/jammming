import React from 'react';

function Track({ name, artist, album, onAddTrack}) {

    const handleAddTrack = (track) => {
        onAddTrack(track);
    };

    return (
        <div>
            <h3>{name}</h3>
            <p>{artist} - {album}</p>
            <button onClick={handleAddTrack}>+</button>
        </div>
    );
}

export default Track; 
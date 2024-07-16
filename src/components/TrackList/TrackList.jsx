import React from 'react';
import Track from '../Track/Track';

function TrackList({ tracks, onAddTrack, onRemoveTrack, isRemoval }) {

    return (
        <div>
            {tracks.map(track => (
                <Track 
                    key={track.id}
                    name={track.name}
                    artist={track.artist}
                    album={track.album}
                    onAddTrack={() => onAddTrack(track)}
                    onRemoveTrack={() => onRemoveTrack(track)}
                    isRemoval={isRemoval}
                />
            ))}
        </div>
    );
}

export default TrackList; 
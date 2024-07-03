import React from 'react';
import './AppSpot.css'
import SearchBar from '../SearchBar/SearchBar'
import Playlist from '../Playlist/Playlist';

function AppSpot() {
    return (
        <div className='AppSpotFull'>
            <div className='AppSpotTop'>
                <h1 className="jammmingtitle">Ja<span className='mmm'>mmm</span>ing</h1>
            </div>
            <SearchBar />
            <Playlist />
        </div>
    )
}



export default AppSpot;
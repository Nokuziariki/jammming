import React from 'react';
import './AppSpot.css'
import SearchBar from '../SearchBar/SearchBar'
import PlayList from '../PlayList/PlayList';

function AppSpot() {
    return (
        <div className='AppSpotFull'>
            <div className='AppSpotTop'>
                <h1 className="jammmingtitle">Ja<span className='mmm'>mmm</span>ing</h1>
            </div>
            <SearchBar />
            <PlayList />
        </div>
    )
}



export default AppSpot;
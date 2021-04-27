import React, { useState, useEffect } from 'react';
import * as trackActions from '../../store/track';
import { useDispatch, useSelector } from 'react-redux';

import Album from './Album'

const Stream = () => {
    const dispatch = useDispatch();
    const track = useSelector(state => state.track);
    let play1;
    useEffect(() => {
        play1 = dispatch(trackActions.getPlaylistByGenre(1));
    }, [])
    console.log(track.currentPlaylist);
    return (
        <>
            <h1>Discover Page</h1>
            {track.currentPlaylist && track.currentPlaylist.map((el) => (
                <Album track={el} />
        ))}
        </>
    );
}

export default Stream;
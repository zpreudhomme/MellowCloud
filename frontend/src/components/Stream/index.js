import React, { useState, useEffect } from 'react';
import * as trackActions from '../../store/track';
import { useDispatch, useSelector } from 'react-redux';

import Album from './Album'

const Stream = () => {
    const dispatch = useDispatch();
    const track = useSelector(state => state.track);
    console.log(track.currentPlaylist);
    return (
        <>
            <h1>Discover Page</h1>
            {track.currentPlaylist && track.currentPlaylist.map((el, i) => (
                <Album track={el} index={i} />
        ))}
        </>
    );
}

export default Stream;
import React, { useState, useEffect } from 'react';
import * as trackActions from '../../store/track';
import { useDispatch, useSelector } from 'react-redux';

import './Stream.css'

import Album from './Album'

const Stream = () => {
    const track = useSelector(state => state.track);
    return (
        <>
            <h1>Discover Page</h1>
            {track.currentPlaylist && track.currentPlaylist.map((el, i) => (
                <Album key={i} track={el} index={i} />
        ))}
        </>
    );
}

export default Stream;
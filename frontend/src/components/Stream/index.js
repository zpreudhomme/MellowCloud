import React from 'react';
import * as trackActions from '../../store/track';
import { useSelector, useDispatch } from 'react-redux';

import './Stream.css'

import Album from './Album'

const Stream = ({loadSong}) => {
    const dispatch = useDispatch();
    let playlists;
    const getPlaylists = async function (){
        playlists = await dispatch(trackActions.getAllPlaylistsByGenre())
    }
    getPlaylists()
    const track = useSelector(state => state.track);
    return (
        <>
            <h1>Discover Page</h1>
            {track.currentPlaylist && track.currentPlaylist.map((el, i) => (
                <Album key={i} track={el} index={i} loadSong={loadSong}/>
        ))}
        </>
    );
}

export default Stream;
import React, { useEffect, useState } from 'react';
import * as trackActions from '../../store/track';

import './Stream.css'

import Album from './Album'

const Stream = ({loadSong, loadPlaylist}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [playlists, setPlaylists] = useState([])

    useEffect(() => {
        // setIsLoaded(true);
        async function fetchData(){
            const data = await trackActions.getAllPlaylistsByGenre();
            setPlaylists(data);
            // console.log(data);
        }
        fetchData();
        // console.log(playlists)
    }, [])

    useEffect(() => {
        console.log("ive changed!", playlists)
        setIsLoaded(true);
    }, [playlists])
  
    return (
        <div className="page">
            <h1>Discover Page</h1>
            <div className="playlist-container">
                {isLoaded && playlists.map((list, j) =>(
                    <div key={j}>
                    <h1>Genre: {list[0].Genre.name}</h1>
                    <div className="playlist">
                        {list.map((el,i) => (
                            <Album key={i} track={el} playlist={list} trackIndex={i} playlistIndex={j} loadSong={loadSong} loadPlaylist={loadPlaylist}/>
                        ))}
                    </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Stream;
import React, { useEffect } from 'react';
// import * as trackActions from '../../store/track';
// import { useSelector, useDispatch } from 'react-redux';

import './Stream.css'

import Album from './Album'

const Stream = ({loadSong, loadPlaylist, playlists}) => {
    // const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // setIsLoaded(true);
        console.log(playlists)
    }, [])
  
    // const playlists = useSelector(state => state.track.allPlaylists);
    return (
        <div className="page">
            <h1>Discover Page</h1>
            <div className="playlist-container">
                {playlists.map((list, j) =>(
                    <div key={j}>
                    <h1>Genre: {list[0].Genre.name}</h1>
                    <div className="playlist">
                        {list.map((el,i) => (
                            <Album key={i} track={el} trackIndex={i} playlistIndex={j} loadSong={loadSong} loadPlaylist={loadPlaylist}/>
                        ))}
                    </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Stream;
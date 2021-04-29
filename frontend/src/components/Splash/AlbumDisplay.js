import { useEffect } from "react";
import Album from '../Stream/Album'

function AlbumDisplay({tracks, loadSong, loadPlaylist}) {
    useEffect(() => {
        console.log(tracks)
    }, [])
    return (
        <div className="splash-album-container">
            {tracks.map((track, i) => (
                <Album key={i} track={track} trackIndex={i} playlist={tracks} loadSong={loadSong} loadPlaylist={loadPlaylist}/>
            ))}
        </div>
    )
}

export default AlbumDisplay;
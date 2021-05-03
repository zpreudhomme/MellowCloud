import Album from '../Stream/Album'

function AlbumDisplay({tracks, loadSong, loadPlaylist}) {
    return (
        <>
            <h2 className="splash-album-title">Check out some recently added tracks to MellowCloud</h2>
            <div className="splash-album-container">
                {tracks.map((track, i) => (
                    <Album key={i} track={track} trackIndex={i} playlist={tracks} loadSong={loadSong} loadPlaylist={loadPlaylist}/>
                ))}
            </div>
        </>
    )
}

export default AlbumDisplay;
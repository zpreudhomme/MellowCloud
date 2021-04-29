import * as trackActions from '../../store/track';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

const Album = ({track, trackIndex, playlist, loadSong, loadPlaylist}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const tracks = useSelector(state => state.track);

    const setSong = () => {
        loadSong(false)
        loadPlaylist(false)
        dispatch(trackActions.setPlaylist(playlist))
        dispatch(trackActions.setTrack(trackIndex));
        loadPlaylist(true)
        loadSong(true);
    }

    const trackClick = () => {
        history.push(`/track/${track.id}`)
    }

    const artistClick = () => {
        history.push(`/user/${track.artistId}`)
    }

    return (
        <div className="individual-track">
            <div className="album-art-wrapper" onClick={() => setSong()}>
                <img className="album-art" alt={`album art for ${track.title}`} src={track.artwork}/>
                <img className="album-play-btn" src="https://i.ibb.co/ww4rCGV/play-btn-img.png" />
            </div>
            <p className="track-title" onClick={() => trackClick()}>{track.title}</p>
            <p className="track-artist" onClick={() => artistClick()}>{track.User.username}</p>
        </div>
    )
}

export default Album;
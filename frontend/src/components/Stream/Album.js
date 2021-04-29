import * as trackActions from '../../store/track';
import { useDispatch, useSelector } from 'react-redux';

const Album = ({track, trackIndex, playlist, loadSong, loadPlaylist}) => {
    const dispatch = useDispatch();
    const tracks = useSelector(state => state.track);
    const setSong = () => {
        loadSong(false)
        loadPlaylist(false)
        dispatch(trackActions.setPlaylist(playlist))
        dispatch(trackActions.setTrack(trackIndex));
        loadPlaylist(true)
        loadSong(true);
    }

    return (
        <div className="individual-track">
            <h3>{track.title}</h3>
            <h3>{track.User.username}</h3>
            <div className="album-art-wrapper" onClick={() => setSong()}>
                <img className="album-art" alt={`album art for ${track.title}`} src={track.artwork}/>
                <img className="album-play-btn" src="https://i.ibb.co/ww4rCGV/play-btn-img.png" />
            </div>
        </div>
    )
}

export default Album;
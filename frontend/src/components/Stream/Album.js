import * as trackActions from '../../store/track';
import { useDispatch, useSelector } from 'react-redux';

const Album = ({track, trackIndex, loadSong, loadPlaylist, playlistIndex}) => {
    const dispatch = useDispatch();
    const tracks = useSelector(state => state.track);
    const setSong = () => {
        loadSong(false)
        loadPlaylist(false)
        dispatch(trackActions.setPlaylist(tracks.allPlaylists[playlistIndex]))
        dispatch(trackActions.setTrack(trackIndex));
        loadPlaylist(true)
        loadSong(true);
    }

    return (
        <div className="individual-track">
            <h3>{track.title}</h3>
            <h3>{track.User.username}</h3>
            <img alt={`album art for ${track.title}`} src={track.artwork}/>
            <button onClick={() => setSong()}>Play me!</button>
        </div>
    )
}

export default Album;
import * as trackActions from '../../store/track';
import { useDispatch, useSelector } from 'react-redux';

const Album = ({track, index, loadSong}) => {
    const dispatch = useDispatch();
    const tracks = useSelector(state => state.track);
    const setSong = () => {
        loadSong(false)
        dispatch(trackActions.setTrack(index));
        loadSong(true);
    }

    return (
        <div className="individual-track">
            <h3>{track.title}</h3>
            <h3>{track.artistId}</h3>
            <img alt={`album art for ${track.title}`} src={track.artwork}/>
            <button onClick={() => setSong()}>Play me!</button>
        </div>
    )
}

export default Album;
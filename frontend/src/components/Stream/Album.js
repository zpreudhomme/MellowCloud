import * as trackActions from '../../store/track';
import { useDispatch, useSelector } from 'react-redux';

const Album = ({track, index}) => {
    const dispatch = useDispatch();
    const tracks = useSelector(state => state.track);
    const setSong = () => {
    
        dispatch(trackActions.setTrack(tracks.currentPlaylist[index]))
    }

    return (
        <div className="individual-track">
            <h3>{track.title}</h3>
            <h3>{track.artistId}</h3>
            <img src={track.artwork}/>
            <button onClick={() => setSong()}>Play me!</button>
        </div>
    )
}

export default Album;
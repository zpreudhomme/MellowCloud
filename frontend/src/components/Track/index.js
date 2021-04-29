import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import * as trackActions from '../../store/track'

function Track() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [track, setTrack] = useState({})
    const { trackId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        async function getData() {
            let data = await trackActions.getSingleTrack(trackId)
            setTrack(data);
        }
        getData();
    }, []);

    useEffect(() => {
        if (track.User){
            setIsLoaded(true);
        }
    }, [track])

    return (
        <div className="track page">
            <h1>Track Page</h1>
            {isLoaded && 
            <div className="track-page-info">
                <h2>{track.title}</h2>
                <h3>{track.User.username}</h3>
                <h4>{track.Genre.name}</h4>
                <img src={track.artwork}/>
            </div>
            }
            <div className="comment-input">
                <input type="text" placeholder="What do you think?"></input>
            </div>
            <div className="comments-container">
                <p>I'm a comment</p>
                <p>I'm a comment</p>
                <p>I'm a comment</p>
                <p>I'm a comment</p>
                <p>I'm a comment</p>
            </div>
                
        </div>
    );
}

export default Track;
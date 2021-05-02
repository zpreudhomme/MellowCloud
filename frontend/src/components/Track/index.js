import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import * as trackActions from '../../store/track'
import "./Track.css"
import Album from "../Stream/Album"

function Track({loadSong, loadPlaylist}) {
    const {user} = useSelector(state => state.session);
    const [isLoaded, setIsLoaded] = useState(false);
    const [track, setTrack] = useState({})
    const [playlist, setPlaylist] = useState([])
    const [comments, setComments] = useState([]);
    const [related, setRelated] = useState([]);
    const { trackId } = useParams();
    const dispatch = useDispatch();
    const trackIndex = 0;
    

    useEffect(() => {
        async function getData() {
            let data = await trackActions.getSingleTrack(trackId)
            let comments = await trackActions.getCommentsByTrack(trackId);
            let relatedTracks = await trackActions.getRelatedTracks(data.genreId, data.id);
            setRelated(relatedTracks);
            setComments(comments)
            setTrack(data);
            setPlaylist([data, ...related]);
        }
        getData();
    }, []);

    useEffect(() => {
        if (track.User){
            setIsLoaded(true);
        }
    }, [track])

    const setSong = () => {
        loadSong(false)
        loadPlaylist(false)
        dispatch(trackActions.setPlaylist(playlist))
        dispatch(trackActions.setTrack(trackIndex));
        loadPlaylist(true)
        loadSong(true);
    }

    const submitComment = async (e) => {
        e.preventDefault();
        let comment = document.getElementById('newComment').value
        document.getElementById('newComment').value = ""
        let newComment = await trackActions.postNewComment(user.id, trackId, comment);
        let commentContainer = document.getElementById("comments-container");
        let commentHtml = `
        <div className="comment">
            <img src=${newComment.User.profilePhoto} />
            <p>${newComment.User.username}</p>
            <p>${newComment.content}</p>
        </div>
        `;
        commentContainer.innerHTML = commentContainer.innerHTML + commentHtml;
    }

    return (
        <div className="track page">
            {isLoaded && 
            <>
            <div className="track-page-info">
                <div className="track-title-artist">
                    <h2>{track.title}</h2>
                    <h3>{track.User.username}</h3>
                </div>
                <img className="play-btn" src="https://i.ibb.co/ww4rCGV/play-btn-img.png" onClick={() => setSong()}/>
                <div className="track-genre">
                    <h4>{track.Genre.name}</h4>
                </div>
                <img id="track-art" src={track.artwork}/>
            </div>
            
            <div className="track-bottom">
                <div className="comments-area">
                    {user && <div className="comment-input">
                        <form method="post">
                            <input id="newComment" type="text" placeholder="What do you think?"></input>
                            <button onClick={(e) => submitComment(e)}type="submit" value="submit" id={`commentUser_${user.id}`}>Submit</button>
                        </form>
                    </div>}
                        <div id="comments-container">
                            {comments.map((comment, i) => (
                                <div key={i} className="comment">
                                    <img src={comment.User.profilePhoto} />
                                    <p>{comment.User.username}</p>
                                    <p className="comment-content">{comment.content}</p>
                                </div>
                            ))}
                        </div>
                </div>
                <div className="related-tracks">
                    <h3>More {track.Genre.name} songs</h3>
                        {related.map((track, i) => (
                            <Album key={i} track={track} trackIndex={i} playlist={related} loadSong={loadSong} loadPlaylist={loadPlaylist} />
                        ))}
                </div>
            </div>
            </>
            }   
        </div>
    );
}

export default Track;
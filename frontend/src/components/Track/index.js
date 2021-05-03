import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import * as trackActions from '../../store/track'
import "./Track.css"
import Album from "../Stream/Album"

function Track({loadSong, loadPlaylist}) {
    const history = useHistory();
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
        setIsLoaded(false);
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
    }, [trackId]);

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

    const userClick = (e) => {
        history.push(`/user/${e.target.id}`)
    }

    const deleteComment = async (e) => {
        e.preventDefault();
        let id = e.target.id;
        let response = await trackActions.deleteComment(id)
        if (response.status === 204){
            let deleteDiv = document.getElementById(`individual-comment-${id}`);
            deleteDiv.classList.add('hideDiv')
        }
    }

    const submitComment = async (e) => {
        e.preventDefault();
        let comment = document.getElementById('newComment').value
        document.getElementById('newComment').value = ""
        let newComment = await trackActions.postNewComment(user.id, trackId, comment);
        let commentContainer = document.getElementById("comments-container");
        let commentHtml = `
        <div className="comment" style="
            margin: 15px;
            padding: 5px;
            border: 1px solid black;
            display: grid;
            grid-template-columns: 75px 1fr;
            grid-template-rows: 50px 1fr;
        ">
            <img src=${newComment.User.profilePhoto} style="
                grid-column-start: 1;
                grid-column-end: 1;
                height: 50px;
                width: 50px;
            "/>
            <h4 style="
            grid-column-start: 2;
            ">${newComment.User.username}</h4>
            <p style="
            grid-column-start: 1;
            grid-column-end: 3;
            grid-row-start: 2;
            ">${newComment.content}</p>
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
                    <h1>{track.title}</h1>
                    <h3>{track.Genre.name}</h3>
                </div>
                <div className="track-artist-photo">
                    <img id={`${track.User.id}`} onClick={(e) => userClick(e)} src={track.User.profilePhoto}/>
                    <h3 id={`${track.User.id}`} onClick={(e) => userClick(e)}>{track.User.username}</h3>
                </div>
                <div className="track-genre">
                </div>
                <div className="track-art-div" src={track.artwork}>
                    <img id="track-art" src={track.artwork} />
                    <img className="play-btn" src="https://i.ibb.co/ww4rCGV/play-btn-img.png" onClick={() => setSong()}/>
                </div>
            </div>
            
            <div className="track-bottom">
                <div className="comments-area">
                    {user && 
                        <form method="post" onSubmit={(e) => submitComment(e)}>
                            <div className="comment-input">
                            <img className="user-photo" src={user.profilePhoto} />
                            <input id="newComment" type="text" placeholder="Write a comment"></input>
                            <button onClick={(e) => submitComment(e)}type="submit" value="submit" id={`commentUser_${user.id}`}>Submit</button>
                            </div>
                        </form>}
                        <div id="comments-container">
                            {comments.map((comment, i) => (
                                <div key={i} className="comment" id={`individual-comment-${comment.id}`}>
                                    <img src={comment.User.profilePhoto} id={comment.User.id} onClick={(e) => userClick(e)}/>
                                    <div className="comment-head">
                                        <h4 id={comment.User.id} onClick={(e) => userClick(e)}>{comment.User.username}</h4>
                                        {user && comment.User.id === user.id && <button id={comment.id} type="button" onClick={(e) => deleteComment(e)}>Delete</button>}
                                    </div>
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
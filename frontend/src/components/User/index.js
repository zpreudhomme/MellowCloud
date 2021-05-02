import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Album from "../Stream/Album"
import * as sessionActions from "../../store/session"
import * as trackActions from "../../store/track"
import './User.css'

function User ({loadSong, loadPlaylist}) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [user, setUser] = useState({});
    const [tracks, setTracks] = useState([])
    const [comments, setComments] = useState([])

    const { userId } = useParams();

    useEffect(() => {
        async function getData(){
            let data = await sessionActions.getUser(userId);
            let playlist = await trackActions.getPlaylistsByArtist(userId);
            let commentList = await trackActions.getCommentsByArtist(userId);
            setComments(commentList);
            setTracks(playlist);
            setUser(data);
        }
        getData();
    }, [])

    useEffect(() => {
        console.log(user)
        console.log(comments)
        if (user.username){
            setIsLoaded(true);
        }
    }, [user])

    return (
        <div className = "user page">
            {isLoaded &&
            <>
                <div className="user-container">
                    <img className="user-profile" src={user.profilePhoto} alt="user"/>
                    <h1 className="user-name">{user.username}</h1>
                </div>
                <div className="user-bottom">
                    <div className="user-comments">
                        <h3>User Comments</h3>
                    {comments.map((comment, i) => (
                                <div key={i} className="comment">
                                    <img src={comment.Track.artwork} />
                                    <p>{comment.Track.title}</p>
                                    <p className="comment-content">{comment.content}</p>
                                </div>
                            ))}
                    </div>
                    <div className="user-tracks">
                        <h3>User Uploaded Tracks</h3>
                        {tracks.map((track, i) =>(
                            <Album key={i} track={track} trackIndex={i} playlist={tracks} loadSong={loadSong} loadPlaylist={loadPlaylist}/>
                        ))}
                    </div>

                </div>
            </> 
                }
        </div>
    )
}

export default User;
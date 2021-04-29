import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import AlbumDisplay from './AlbumDisplay';
import * as trackActions from "../../store/track";

import './Splash.css'

function Splash({loadSong, loadPlaylist}) {
    const [isLoaded, setIsLoaded]= useState(false);
    const [playlist, setPlaylist]= useState([])
    const history = useHistory();

    const streamClick = () => {
        history.push('/stream')
    }
    const uploadClick = () => {
        history.push('/upload')
    }

    useEffect(() => {
        async function getData() {
            let data = await trackActions.getMostRecent();
            console.log("it me", data)
            setPlaylist(data);
        }
        getData();
    }, [])

    useEffect(() => {
        if(playlist.length> 0){
            console.log("watch me run")
            setIsLoaded(true)
        }
        console.log(playlist)
    }, [playlist])
    
    return(
        <div className="page splash">
            <div className="splash-img-wrapper">
                <img id="splash-img" src='https://images.unsplash.com/photo-1486520299386-6d106b22014b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' alt='splash-photo' />
                <div className="splash-img-center-1">Welcome to</div>
                <div className="splash-img-center-2">MellowCloud</div>
                <button className="splash-img-center-3" onClick={()=> streamClick()}>Start Relaxing</button>
            </div>
            <div className="splash-search">
                <input type="text" className="splash-searchbar" placeholder="Search for relaxing tracks"></input>
                <button type="button" className="splash-upload" onClick={() => uploadClick()}>Upload your own</button>
            </div>
            {isLoaded && <AlbumDisplay tracks={playlist} loadSong={loadSong} loadPlaylist={loadPlaylist}/>}
        </div>
    )

}

export default Splash;
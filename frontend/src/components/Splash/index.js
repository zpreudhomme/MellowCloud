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

    const searchSubmit = (e) => {
        e.preventDefault();
        let search = document.getElementById("splash-searchbar").value
        document.getElementById("splash-searchbar").value =""
        // console.log(search)
        history.push(`/search/${search}`)
      }

    useEffect(() => {
        async function getData() {
            let data = await trackActions.getMostRecent();
            setPlaylist(data);
        }
        getData();
    }, [])

    useEffect(() => {
        if(playlist.length> 0){
            setIsLoaded(true)
        }
    }, [playlist])
    
    return(
        <div className="page splash">
            <div className="splash-img-wrapper">
                <img id="splash-img" src='https://images.unsplash.com/photo-1486520299386-6d106b22014b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' alt='splash' />
                <div className="splash-img-center-1">Welcome to</div>
                <div className="splash-img-center-2">MellowCloud</div>
                <button className="splash-img-center-3" onClick={()=> streamClick()}>Start Relaxing</button>
            </div>
            <div className="splash-search">
                <form method="post" onSubmit={(e) => searchSubmit(e)} >
                    <input type="text" id="splash-searchbar" placeholder="Search for relaxing tracks"></input>
                </form>
                <button type="button" className="splash-upload" onClick={() => uploadClick()}>Upload your own</button>
            </div>
            {isLoaded && <AlbumDisplay tracks={playlist} loadSong={loadSong} loadPlaylist={loadPlaylist}/>}
            <div className="about-div">
                <div className="about-clone">
                    <h2 className="splash-about-title">Welcome to my SoundCloud clone!</h2>
                    <a href="https://github.com/zpreudhomme/MellowCloud">Project GitHub</a>
                    <p>This site was build mostly using a React framework to build out the functionality and components of the frontend.
                        The database was created and queried using Sequelize and was hosted with Express.
                    </p>
                    <p>
                        Building this project over the course of a week taught not only about React components,
                        but also how to style effectively with CSS and implement HTMLAudioElements to play music.
                    </p>
                </div>
                <div className="about-profile">
                    <h2 className="splash-about-title">Created By:</h2>
                    <img src="https://avatars.githubusercontent.com/u/76059008?v=4" alt="Zane profile"/>
                    <h3>Zane Preudhomme</h3>
                    <a href="https://github.com/zpreudhomme">GitHub</a>
                    <p>Zane loves learning to code and spends any chance he can get exploring the outdoors of Arizona through backpacking and running.</p>
                </div>
            </div>

        </div>
    )

}

export default Splash;
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import AlbumDisplay from './AlbumDisplay';
import * as trackActions from "../../store/track";

import './Splash.css'

function Splash() {
    const [isLoaded, setIsLoaded]= useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const streamClick = () => {
        history.push('/stream')
    }
    const uploadClick = () => {
        history.push('/upload')
    }

    useEffect(() => {
        dispatch(trackActions.getMostRecent()).then(()=> setIsLoaded(true))
    })
    return(
        <div className="page splash">
            <div className="splash-img-wrapper">
                <img id="splash-img" src='https://mellowcloud.s3-us-west-1.amazonaws.com/splash-photo.jpg' alt='splash-photo' />
                <div className="splash-img-center-1">Welcome to</div>
                <div className="splash-img-center-2">MellowCloud</div>
                <button className="splash-img-center-3" onClick={()=> streamClick()}>Start Relaxing</button>
            </div>
            <div className="splash-search">
                <input type="text" class="splash-searchbar" placeholder="Search for relaxing tracks"></input>
                <button type="button" class="splash-upload" onClick={() => uploadClick()}>Upload your own</button>
            </div>
            {isLoaded && <AlbumDisplay/>}
        </div>
    )

}

export default Splash;
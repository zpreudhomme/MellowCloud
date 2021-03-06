import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Splash from "./components/Splash";
import AudioPlayer from "./components/AudioPlayer";
import Stream from "./components/Stream"
import Track from "./components/Track"
import User from "./components/User"
import Library from "./components/Library"
import Upload from "./components/Upload"
import Search from "./components/Search"
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

// const defaultTrack = {
//   title: "My Song",
//   artist: "Zane Preudhomme",
//   artwork: "https://i.pinimg.com/originals/5b/90/6e/5b906ef12a8dc0c15b76a55ffeb9a6b5.jpg",
//   audioSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3"
// }

function App() {
  const dispatch = useDispatch();
  const track = useSelector(state => state.track);
  const [isLoaded, setIsLoaded] = useState(false);
  const [trackLoaded, setTrackLoaded] = useState(false);
  const [playlistLoaded, setPlaylistLoaded] = useState(false);
  useEffect(() => {
    // dispatch(trackActions.getAllPlaylistsByGenre()).then(() => setPlaylistLoaded(true))
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {playlistLoaded && trackLoaded && <AudioPlayer tracks={track.currentPlaylist}/>}
      {isLoaded && ( 
        <div className="main-page">
          <Switch>
            <Route exact path="/">
              <Splash loadSong={setTrackLoaded} loadPlaylist={setPlaylistLoaded}/>
            </Route>
            <Route path ="/stream">
              <Stream loadSong={setTrackLoaded} loadPlaylist={setPlaylistLoaded} playlists={track.allPlaylists}/>
            </Route>
            <Route exact path="/track/:trackId">
              <Track loadSong={setTrackLoaded} loadPlaylist={setPlaylistLoaded}/>
            </Route>
            <Route path="/user/:userId">
              <User loadSong={setTrackLoaded} loadPlaylist={setPlaylistLoaded}/>
            </Route>
            <Route path="/library">
              <Library />
            </Route>
            <Route path="/upload">
              <Upload />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route>
              <div className="page">
                <h1>404 Page not Found</h1>
              </div>
            </Route>
          </Switch>
        </div>
      )}
    </>
  );
}

export default App;
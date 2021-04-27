import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import AudioPlayer from "./components/AudioPlayer";
import Stream from "./components/Stream"
import * as sessionActions from "./store/session";
import * as trackActions from "./store/track";
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
    dispatch(trackActions.getPlaylistByGenre(2)).then(() => setPlaylistLoaded(true))
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {playlistLoaded && trackLoaded && <AudioPlayer tracks={track.currentPlaylist} index={track.currentTrack}/>}
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path ="/stream">
            <Stream loadSong={setTrackLoaded}/>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import AudioPlayer from "./components/AudioPlayer";
import Stream from "./components/Stream"
import * as sessionActions from "./store/session";
import * as trackActions from "./store/track";
import Navigation from "./components/Navigation";

const defaultTrack = {
  title: "My Song",
  artist: "Zane Preudhomme",
  artwork: "https://i.pinimg.com/originals/5b/90/6e/5b906ef12a8dc0c15b76a55ffeb9a6b5.jpg",
  audioSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3"
}

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(trackActions.getPlaylistByGenre(1))
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <AudioPlayer tracks={[defaultTrack]} index={0}/>
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path ="/stream">
            <Stream />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
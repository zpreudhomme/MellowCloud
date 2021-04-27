import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import AudioPlayer from "./components/AudioPlayer";
import * as sessionActions from "./store/session";
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
    dispatch(sessionActions.getPlaylistByGenre(1)).then((res) => console.log(res));
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <AudioPlayer track={defaultTrack}/>
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import AudioControls from './AudioControls'
import * as trackActions from '../../store/track'
import './AudioPlayer.css'

const AudioPlayer = ({ tracks }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    let index = useSelector(state => state.track.currentTrack);
    let track = useSelector(state => state.track.currentPlaylist);
    // Important States
    const [trackIndex, setTrackIndex] = useState(index);
    const [trackProgress, setTrackProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false)
    const { title, User, artwork, audioSrc, id } = track[index];

    // References
    const audioRef = useRef(new Audio(audioSrc));
    const intervalRef = useRef();
    const isReady = useRef(true);

    const { duration } = audioRef.current;

    const trackClick = () => {
        history.push(`/track/${id}`)
    }

    const artistClick = () => {
        history.push(`/user/${User.id}`)
    }

    //Use Effects
    useEffect(() => {
        setTrackIndex(index);
    }, [index]);


    useEffect(() => {
        if (isPlaying){
            audioRef.current.play();
            startTimer();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying, trackIndex]);

    //Cleans up stuff on unmount
    useEffect(() => {
        return () => {
            audioRef.current.pause();
            clearInterval(intervalRef.current)
        }
    }, []);

    useEffect(() => {
        audioRef.current.pause();
        // console.log("Beware")
        audioRef.current = new Audio(audioSrc);
          setTrackProgress(audioRef.current.currentTime);
      
        if (isReady.current) {
          audioRef.current.play();
          setIsPlaying(true);
          startTimer();
        } else {
          // Set the isReady ref as true for the next pass
          isReady.current = true;
        }
      }, [trackIndex, track, audioSrc]);

    //Helper Function Land
    //TODO What the heck do i pass for the next/prev tracks? maybe playlists? Genres?
    //Will go to next track
    const toPrevTrack = async () => {
        if (trackIndex - 1 < 0) {
            // setTrackIndex(tracks.length - 1);
            await dispatch(trackActions.setTrack(tracks.length - 1));
            
        } else {
            // setTrackIndex(trackIndex - 1);
            await dispatch(trackActions.setTrack(trackIndex - 1));
        }
      }
      
      const toNextTrack = async () => {
        if (trackIndex < tracks.length - 1) {
            // setTrackIndex(trackIndex + 1);
            await dispatch(trackActions.setTrack(trackIndex + 1));
        } else {
            // setTrackIndex(0);
            await dispatch(trackActions.setTrack(0));
        }
      }

    const startTimer = () => {
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            if (audioRef.current.ended) {
                toNextTrack();
            } else {
                setTrackProgress(audioRef.current.currentTime);
            }
        }, [1000])
    }

    const onScrub = (time) => {
        clearInterval(intervalRef.current);
        audioRef.current.currentTime = time;
        setTrackProgress(audioRef.current.currentTime);
    }

    const onScrubEnd = () => {
        if (!isPlaying) {
            setIsPlaying(true);
          }
          startTimer();
    }

    return (
        <div className="audio-player-wrapper">
            <div className="audio-player">
                <AudioControls 
                    isPlaying= {isPlaying}
                    onPrevClick={toPrevTrack}
                    onNextClick={toNextTrack}
                    onPlayPauseClick={setIsPlaying}
                />
                <input
                    type="range"
                    value={trackProgress}
                    step="1"
                    min="0"
                    max={duration ? duration : `${duration}`}
                    className="track-progress"
                    onChange={(e) => onScrub(e.target.value)}
                    onMouseUp={onScrubEnd}
                    onKeyUp={onScrubEnd}
                />
                <div className="track-info">
                    <img
                    className="artwork"
                    src={artwork} 
                    alt="album art"
                    onClick={() => trackClick()}
                    />
                    <div className="track-details">
                        <p onClick={() => trackClick()} className="player-track-title">{title}</p>
                        <p onClick={() => artistClick()} className="player-track-artist">{User.username}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AudioPlayer
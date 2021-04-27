import React, { useState, useEffect, useRef } from 'react';
import AudioControls from './AudioControls'
import './AudioPlayer.css'

const AudioPlayer = ({ tracks, index }) => {
    // Important States
    const [trackIndex, setTrackIndex] = useState(index);
    const [trackProgress, setTrackProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false)

    const { title, artist, artwork, audioSrc } = tracks[trackIndex];

    // References
    const audioRef = useRef(new Audio(audioSrc));
    const intervalRef = useRef();
    const isReady = useRef(false);

    const { duration } = audioRef.current;

    //Use Effects

    useEffect(() => {
        if (isPlaying){
            audioRef.current.play();
            startTimer();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    //Cleans up stuff on unmount
    useEffect(() => {
        return () => {
            audioRef.current.pause();
            clearInterval(intervalRef.current)
        }
    }, []);

    useEffect(() => {
        audioRef.current.pause();
      
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
      }, [trackIndex]);

    //Helper Function Land
    //TODO What the heck do i pass for the next/prev tracks? maybe playlists? Genres?
    //Will go to next track
    const toPrevTrack = () => {
        if (trackIndex - 1 < 0) {
            setTrackIndex(tracks.length - 1);
        } else {
            setTrackIndex(trackIndex - 1);
        }
      }
      
      const toNextTrack = () => {
        if (trackIndex < tracks.length - 1) {
            setTrackIndex(trackIndex + 1);
        } else {
            setTrackIndex(0);
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
                    />
                    <div className="track-details">
                        <p className="track-title">{title}</p>
                        <p className="track-artist">{artist}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AudioPlayer
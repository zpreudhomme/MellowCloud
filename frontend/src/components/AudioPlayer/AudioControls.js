const AudioControls = ({ isPlaying, onPlayPauseClick, onPrevClick, onNextClick}) => {
    
    
    return(
        <div className="audio-controls">
            <button 
                className="prev-button icon-size" 
                type="button" 
                onClick={onPrevClick}
            >
                    <i className= "fas fa-step-backward" />
            </button>
            {isPlaying ? (
                <button
                className="play-pause-button icon-size"
                type ="button"
                onClick= {() => onPlayPauseClick(false)}
            >
                <i className="fas fa-pause"/>
            </button>
            ) : (<button
                className="play-pause-button icon-size"
                type ="button"
                onClick= {() => onPlayPauseClick(true)}
            >
                <i className="fas fa-play"/>
            </button>)}
            
            <button 
                className="next-button icon-size" 
                type="button" 
                onClick={onNextClick}
            >
                    <i className= "fas fa-step-forward" />
            </button>
        </div>
        
    )
}

export default AudioControls;
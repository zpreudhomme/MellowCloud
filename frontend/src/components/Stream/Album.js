
const Album = ({track}) => {

    const setSong = () => {
        console.log("I'm playing music!")
    }

    return (
        <div className="individual-track">
            <h3>{track.title}</h3>
            <h3>{track.artistId}</h3>
            <img src={track.artwork}/>
            <button onClick={() => setSong()}>Play me!</button>
        </div>
    )
}

export default Album;
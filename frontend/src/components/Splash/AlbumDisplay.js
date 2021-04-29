import { useEffect } from "react";
import Album from '../Stream/Album'

function AlbumDisplay({tracks}) {
    useEffect(() => {
        console.log(tracks)
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default AlbumDisplay;
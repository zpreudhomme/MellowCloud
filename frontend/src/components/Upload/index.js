import { useState } from 'react'

function Upload() {
    const [file, setFile] = useState("")

    let url = "https://api.cloudinary.com/v1_1/mellowcloud123/auto/upload"
    const newMusic = async (e) => {
        e.preventDefault();
        let response = await fetch(url, {
            method:'POST',
            body: JSON.stringify({
                file: file,
            }),
            upload_preset: "yfgse0hd"
        })
        let data = await response.json();
        console.log(data)
    }
    return (
        <div className="upload page">
            <h1>Upload</h1>
            <h3>Functionality coming soon!</h3>
            {/* <form method="post" onSubmit={newMusic}>
                <label htmlFor="file">Select a file:</label>
                <input 
                    value={file} 
                    type="file" 
                    id="file" 
                    onChange={(e) => setFile(e.target.value)}
                    name="file" 
                    accept="audio/, .mp3" />

                <button type="submit">Submit</button>
            </form> */}
        </div>
    )
}

export default Upload;
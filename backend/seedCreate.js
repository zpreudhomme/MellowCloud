const fetch = require("node-fetch");
const bcrypt = require("bcryptjs")
//Crediting: Pixabay, Freesound, Free Music Archive
async function createUsers () {
    let users = [];
    for (let i = 0; i < 30; i++){
        let res = await fetch('https://randomuser.me/api/')
        let data = await res.json();
        let user = {
            username: data.results[0].login.username,
            email: data.results[0].email,
            hashedPassword: bcrypt.hashSync(data.results[0].login.password),
            profilePhoto: data.results[0].picture.large,
        }
        users.push(user);
    }
    console.log(users);
   
}

// createUsers();

function createTrack (){
  let tracks = [];
  for (let i = 0; i < 22; i++){
  
    let artistId = Math.ceil(Math.random()*31);
    let genreId = Math.ceil(Math.random()*4);
    console.log(artistId);
    let track = {
      title: "",
      artist: artistId,
      artwork: "https://blog.spoongraphics.co.uk/wp-content/uploads/2017/album-art/18.jpg",
      audioSrc: "",
      genreId: genreId,
    }
    tracks.push(track)
  }
  return tracks;
}

let tracks = createTrack()

console.log(tracks);
const fetch = require("node-fetch");
const bcrypt = require("bcryptjs")
//Crediting: Pixabay, Freesound, Free Music Archive

//colors
// #2F3235
// #5C91E0
// #B5BCC7
// #152A4A
// #3A7D44

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
  for (let i = 0; i < 18; i++){
  
    let artistId = Math.ceil(Math.random()*31);
    let genreId = Math.ceil(Math.random()*4);
    console.log(artistId);
    let track = {
      title: "FILLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
      artist: artistId,
      artwork: "FILLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
      audioSrc: "FILLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
      genreId: genreId,
    }
    tracks.push(track)
  }
  return tracks;
}

// let tracks = createTrack()

// console.log(tracks);

async function createComments () {
  let comments = [];

  for (let i = 0; i < 100; i++){
    let userId = Math.ceil(Math.random()*31);
    let trackId = Math.ceil(Math.random()*40);
    let sentences = Math.ceil(Math.random()*4);
    let res = await fetch(`https://baconipsum.com/api/?type=meat-and-filler&sentences=${sentences}&start-with-lorem`)
    let data = await res.json()
    let comment = {
      content: data[0],
      userId,
      trackId
    }
    comments.push(comment)
  }
  console.log(comments)
}

createComments();
# MellowCloud
## Welcome to MellowCloud!
MellowCloud is a SoundClound clone designed to help you find music and sounds to mellow you out after a stressful day. 

## Feature List
### Tracks
 - This site is built on displaying music tracks that can be clicked on to be played
 - Each track will have a page to show information and artwork about the track,
 - Each track will have a comments section that has associated comments attached to it.
### Music Player
 - The page will have the ability to play music by clicking on a tracks artwork or play button.
 - The music player will have controls for pausing, playing, and skipping to the next track.
 - The music player will have a progress bar tracker with a button that will allow the user to scroll through the song.
 - The player will begin playing the next track when the current track ends.
### Users
 - Users will be able to sign up to or login to the site if they already have an account.
 - Users will be able to edit their password or username as well as add a unique profile photo
 - (Stretch goal) Users will be able to upload a track of their own
 - (Stretch goal) Users will have a personal library of tracks they have liked or playlists that they have created.
### Comments
 - Logged in users will be able to leave a comment on a track
 - Adding a comment to the page will not cause a full page reload

## Technology Used

This project was build almost entirely with React in the frontend.  I was able to practice styling with CSS throughout the project and ensure that I am growing my skills in that area.  The backend server and API was created and served by Express.  The database setup and querying was handled by Sequelize.  The project is hosted on Heroku and can be viewed at 
[MellowCloud](https://mellowcloud.herokuapp.com).
Resources for seed files were found at [Pixabay](https://pixabay.com/music/), [FreeSound](https://freesound.org/), [Free Music Archive](https://freemusicarchive.org/), [Unsplash](https://unsplash.com/), and [Random User Generator](https://randomuser.me/).

## Database Schema

### `Users`
| column name    | data type     | details               |
|----------------|---------------|-----------------------|
| id             | int           | not null, primary key |
| username       | string        | not null              |
| email          | string        | not null, isEmail     |
| hashedPassword | binary string | not null              |
| profilePhoto   | string        |                       |

### `Comments`
| column name | data type | details               |
|-------------|-----------|-----------------------|
| id          | int       | not null, primary key |
| content     | text      | not null              |
| userId      | int       | not null, foreign key |
| trackId     | int       | not null, foreign key |

- `userId` references `id` from `users`
- `trackId` references `id` from `tracks`

### `Tracks`
| column name | data type | details               |
|-------------|-----------|-----------------------|
| id          | int       | not null, primary key |
| title       | string    | not null              |
| artistId    | string    | not null              |
| artwork     | string    |                       |
| source      | string    | not null              |
| genreId     | string    | not null              |

- `artistId` references `id` from `users`
- `genreId` references `id` from `genres`

### `Genres`
| column name | data type | details               |
|-------------|-----------|-----------------------|
| id          | int       | not null, primary key |
| name        | string    | not null              |

## API Routes

 The API is an important part of this project which will help keep the site upto date and organized with tracks and what to do with them.  The API is responsible for populating most of the website with information.
 
- `/api/session`
  - `POST /` Will login a user with correct credentials
  - `DELETE /` Will delete the session cookie and logout the current user
  - `GET /` Will restore the current user and return a safe object of user information
- `/api/users`
  - `POST /` Creates a new user from a validated request body, returns the new user upon completion
  - `GET /:id` Finds a specified user by their primary key
  - `GET /:id/comments` Gets all the comments of a specified user
- `/api/tracks`
  - `GET /:id` Finds a track by its primary key
  - `GET /genre` Finds all tracks and organizes them by genre
  - `GET /genre/:id` Finds all tracks of a specified genre
  - `GET /artist/:id` Finds all tracks of a specified artist
  - `GET /recent` Finds the 12 most recent tracks added and returns them
  - `GET /:id(\\d+)/comments` Finds all the comments associated to a specified track
  - `GET /related/:id(\\d+)/:trackId(\\d+)`Gets a list of up to 4 related tracks to a trackId without including the original track
  - `POST /comment` Creates and adds a new comment to the database
  - `DELETE /comment/:id(\\d+)` Deletes a specified comment from the database



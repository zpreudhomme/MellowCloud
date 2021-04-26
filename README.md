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

# Database Schema

## `Users`
| column name    | data type     | details               |
|----------------|---------------|-----------------------|
| id             | int           | not null, primary key |
| username       | string        | not null              |
| email          | string        | not null, isEmail     |
| hashedPassword | binary string | not null              |
| profilePhoto   | string        |                       |

## `Comments`
| column name | data type | details               |
|-------------|-----------|-----------------------|
| id          | int       | not null, primary key |
| content     | text      | not null              |
| userId      | int       | not null, foreign key |
| trackId     | int       | not null, foreign key |

`userId` references `id` from `users`
`trackId` references `id` from `tracks`

## `Tracks`
| column name | data type | details               |
|-------------|-----------|-----------------------|
| id          | int       | not null, primary key |
| title       | string    | not null              |
| artist      | string    | not null              |
| artwork     | string    |                       |
| source      | string    | not null              |

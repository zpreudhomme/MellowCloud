import { csrfFetch } from './csrf'

const SET_TRACK = 'track/SET_TRACK'
const SET_PLAYLIST = 'track/SET_PLAYLIST'
const SET_ALL_PLAYLIST = 'track/SET_ALL_PLAYLIST'

export const setTrack = track => ({
    type: SET_TRACK,
    track
})

export const setPlaylist = playlist => ({
    type: SET_PLAYLIST,
    playlist
})

const setAllPlaylist = playlists => ({
    type: SET_ALL_PLAYLIST,
    playlists
})

export const getPlaylistByGenre = (id) => async dispatch => {
    const response = await csrfFetch(`api/tracks/genre/${id}`)

    const data = await response.json();
    dispatch(setPlaylist(data))
    return data;
}

export const getAllPlaylistsByGenre = () => async dispatch => {
    const response = await csrfFetch('api/tracks/genre');

    const data = await response.json();
    dispatch(setAllPlaylist(data))
    return data;
}

export const getMostRecent = () => async dispatch => {
    const response = await csrfFetch('api/tracks/recent');

    const data = await response.json();
    return data;
}

const initialState = {
    currentTrack: null,
    currentPlaylist: null,
    allPlaylists: null,
}

const trackReducer = (state= initialState, action) => {
    let newState = Object.assign({}, state);
    switch (action.type){
        case SET_TRACK:
            newState.currentTrack = action.track;
            return newState;
        case SET_PLAYLIST:
            newState.currentPlaylist = action.playlist;
            return newState;
            case SET_ALL_PLAYLIST:
            newState.allPlaylists = action.playlists;
            return newState;
        default:
            return state;
    }
}

export default trackReducer;
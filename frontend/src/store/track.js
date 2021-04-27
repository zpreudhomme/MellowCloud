import { csrfFetch } from './csrf'

const SET_TRACK = 'track/SET_TRACK'
const SET_PLAYLIST = 'track/SET_PLAYLIST'

const setTrack = track => ({
    type: SET_TRACK,
    track
})

const setPlaylist = playlist => ({
    type: SET_PLAYLIST,
    playlist
})

export const getPlaylistByGenre = (id) => async dispatch => {
    const response = await csrfFetch(`api/tracks/genre/${id}`)

    const data = await response.json();
    dispatch(setPlaylist(data))
    return data;
}

const initialState = {
    currentTrack: null,
    currentPlaylist: null,
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
        default:
            return state;
    }
}

export default trackReducer;
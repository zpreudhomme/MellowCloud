import { csrfFetch } from './csrf'

const ADD_USER = 'session/ADD_USER'
const REMOVE_USER ='session/REMOVE_USER'

const add = user => ({
    type: ADD_USER,
    payload: user
})

const remove = user => ({
    type: REMOVE_USER,
    user
})

export const loginUser = (user) => async dispatch => {
    const { credential, password } = user;
    const response = await csrfFetch('api/session', {
        method: 'POST',
        body: JSON.stringify({ credential, password })
    });

    const data = await response.json();
    dispatch(add(data.user));
    return response;
}

export const restoreUser = () => async dispatch => {
    const response = await csrfFetch('api/session')

    const data = await response.json();
    dispatch(add(data.user));
    return response;
}

export const signup = (user) => async dispatch => {
    const { username, email, password } = user;
    const response = await csrfFetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });
    const data = await response.json();
    dispatch(add(data.user));
    return response;
  };

export const logout = () => async dispatch => {
    const response = await csrfFetch("/api/session", {
        method: "DELETE"
    })
    const data = await response.json();
    dispatch(remove());
    return data;
}

const initialState = {
    user: null
}

const sessionReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type){
        case ADD_USER:
            state = {};
            newState.user = action.payload;
            return newState;
        case REMOVE_USER:
            state =  {};
            return initialState;
        default:
            return state;
    }
}


export default sessionReducer;
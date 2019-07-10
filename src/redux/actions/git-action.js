import { GET_GIT_PROFILES, SET_LOADING, GET_ERRORS, SEARCH_PROFILES, CLEAR_PROFILES, GET_GIT_PROFILE, GET_GIT_PROFILE_REPOS } from './types';

export const getGitProfiles = () => async dispatch => {
    try {
        setLoading();
        const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`);
        const data = await res.json();

        dispatch({
            type: GET_GIT_PROFILES,
            payload: data
        });
    } catch (error) {
        console.error(error);
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
}

export const getGitProfile = username => async dispatch => {
    try {
        setLoading();
        const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${username}`);
        const data = await res.json();

        dispatch({
            type: GET_GIT_PROFILE,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
}

export const getGitRepos = (username) => async dispatch => {
    try {
        setLoading();
        const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${username}/repos?_limit=5`);
        const data = await res.json();

        dispatch({
            type: GET_GIT_PROFILE_REPOS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
}

export const searchUsers = text => async dispatch => {
    try {
        console.log(text)
        setLoading();
        const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        const data = await res.json();

        dispatch({
            type: SEARCH_PROFILES,
            payload: data.items
        });
    } catch (error) {
        console.error(error);
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
}
export const clearProfiles = () => {
    return {
        type: CLEAR_PROFILES
    }
}
const setLoading = () => {
    return {
        type: SET_LOADING
    }
}

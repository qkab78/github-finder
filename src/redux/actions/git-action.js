import { GET_GIT_PROFILES, SET_LOADING, GET_ERRORS, SEARCH_PROFILES, CLEAR_PROFILES, GET_GIT_PROFILE, GET_GIT_PROFILE_REPOS } from './types';
let githubClientId;
let githubClientSecret;
let githubURL;

if (process.env.NODE_ENV !== 'production') {
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
    githubURL = process.env.REACT_APP_GITHUB_URL;
} else {
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
    githubURL = process.env.GITHUB_URL;
}
export const getGitProfiles = () => async dispatch => {
    try {
        setLoading();
        const res = await fetch(`${githubURL}/users`);
        const data = await res.json();

        dispatch({
            type: GET_GIT_PROFILES,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
}

export const getGitProfile = username => async dispatch => {
    try {
        setLoading();
        const res = await fetch(`${githubURL}/users/${username}`);
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
        const res = await fetch(`${githubURL}/users/${username}/repos?_limit=5`);
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
        setLoading();
        const res = await fetch(`${githubURL}/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`);
        const data = await res.json();

        dispatch({
            type: SEARCH_PROFILES,
            payload: data.items
        });
    } catch (error) {
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

import { GET_GIT_PROFILES, SET_LOADING, GET_ERRORS } from './types';

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


const setLoading = () => {
    return {
        type: SET_LOADING
    }
}
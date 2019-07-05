import { GET_GIT_PROFILES, GET_GIT_PROFILE, SEARCH_PROFILES, SET_LOADING, GET_ERRORS, CLEAR_PROFILES } from '../actions/types';


const initialState = {
    profiles: null,
    profile: null,
    current: null,
    loading: false,
    errors: null
}
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_GIT_PROFILES:
            return {
                ...state,
                loading: false,
                profiles: payload
            }
        case GET_GIT_PROFILE:
            return {
                ...state,
                loading: false,
                profile: payload
            }
        case CLEAR_PROFILES:
            return {
                ...state,
                loading: false,
                profiles: []
            }
        case SEARCH_PROFILES:
            return {
                ...state,
                loading: false,
                profiles: payload
            }
        case SET_LOADING:
            return { ...state, loading: true }
        case GET_ERRORS:
            return {
                ...state,
                errors: payload
            }
        default:
            return state
    }
}
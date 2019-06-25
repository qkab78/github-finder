import { GET_GIT_PROFILES, SET_LOADING, GET_ERRORS } from '../actions/types';


const initialState = {
    profiles: null,
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
        case SET_LOADING:
            return { ...state, loading: true }
        case GET_ERRORS:
            console.error(payload);
            return {
                ...state,
                errors: payload
            }
        default:
            return state
    }
}
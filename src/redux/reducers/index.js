import { combineReducers } from 'redux'
import GitReducer from './git-reducer'
export default combineReducers({
    git: GitReducer
})
import {combineReducers} from 'redux'
import movReducer from './movReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
    movs: movReducer,
    auth: authReducer
})

export default rootReducer
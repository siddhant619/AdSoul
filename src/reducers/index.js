import {combineReducers} from 'redux'
import appListReducer from './appListReducer'
import appStatReducer from './appStatReducer'

export default combineReducers(
    {
        appList:appListReducer,
        appStat:appStatReducer
    }
)
import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
    /*x:*/
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store;
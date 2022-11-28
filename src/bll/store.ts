import {applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import thunk from 'redux-thunk'
import { counterReduser } from './counter-reduser'


const rootReduser = combineReducers({
    counter: counterReduser
})

export const store = legacy_createStore(rootReduser,applyMiddleware(thunk))
export type AppRootStateType = ReturnType<typeof rootReduser>
export type AppStoreType = typeof store

store.subscribe(()=>{
    localStorage.setItem('app-state', JSON.stringify(store.getState()));
    localStorage.setItem('value', JSON.stringify(store.getState().counter.value));
})

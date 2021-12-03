//import dotenv from "dotenv/config"
import { createStoreHook } from 'react-redux'
import { AnyAction, applyMiddleware, combineReducers, compose, createStore, Store } from 'redux'
import thunk from 'redux-thunk'
import locationReducer from '../reducers/locationReducer'
import weatherReducer from '../reducers/weatherReducer'
import ReduxStore from '../types/ReduxStore'
import {persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { encryptTransform } from "redux-persist-transform-encrypt"
import IEncrypt from '../types/encrypt'
import { resolve } from 'dns'
import { IForecast } from '../types/weather'


const aComposeFunctionThatAlwaysWorks = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export const initialState: ReduxStore = {
    locations:{
            currentCity: "",
            homeCity: "",
    },
    weather: {
        current: []
    } 
}
const persistConfig = {
    key: "root",
    storage,
    transforms: [
        encryptTransform({
            secretKey : "insertSecretKey" 
            //process.env.REACT_APP_ENCRYPTION_KEY!
        })
    ] 
    }


const bigReducer = combineReducers({
  locations: locationReducer,
  weather: weatherReducer,
})
const persistedBigReducer = persistReducer(persistConfig, bigReducer)



 const configureStore = () => { 
    let store = createStore(persistedBigReducer, initialState as any, aComposeFunctionThatAlwaysWorks(applyMiddleware(thunk))) 
    const persistor = persistStore(store as any)
    return {store, persistor} 
}

export const {store, persistor} = configureStore()
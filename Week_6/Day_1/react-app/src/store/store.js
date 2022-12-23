import {configureStore,getDefaultMiddleware} from '@reduxjs/toolkit'
import LoginSlice from '../pages/login/redux/slice'
import logger from 'redux-logger'
import HomeSlice from '../pages/home/redux/slice'

export const store = configureStore({
    reducer:{      
        Login:LoginSlice,
        Home:HomeSlice
    },
    middleware: (getDefaultMiddleware)=> {
        return getDefaultMiddleware().concat(logger)
    }
})
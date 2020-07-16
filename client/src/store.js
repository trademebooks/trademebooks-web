import {configureStore, getDefaultMiddleware, combineReducers} from '@reduxjs/toolkit'

// We'll use redux-logger just as an example of adding another middleware
import logger from 'redux-logger'

import {userBookSlice} from './reducers/book'

const reducer = combineReducers({books: userBookSlice.reducer})
const middleware = [
    ...getDefaultMiddleware(),
    logger
]
const store = configureStore({
    reducer,
    middleware,
    devTools: process.env.NODE_ENV !== 'production'
})

console.log(store.getState())
export default store;
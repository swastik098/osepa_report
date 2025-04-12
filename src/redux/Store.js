// store.js
import { configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import LoginReducer from './MasterSlice' // or rename to LoginSlice.js for clarity

const logger = createLogger()

const store = configureStore({
  reducer: {
    login: LoginReducer, // key must match the slice name used in useSelector if needed
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
})

export default store

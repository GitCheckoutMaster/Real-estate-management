/* eslint-disable no-unused-vars */
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './userSlice.js';

const presistConfig = {
    key: 'root',
    storage,
}

const presistRed = persistReducer(presistConfig, userReducer);

export const store = configureStore({
    reducer: {
        auth: presistRed,
    }
})
export const persistor = persistStore(store);

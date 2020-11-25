import { combineReducers } from 'redux';
import logger from 'redux-logger';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import todoSlice , { initialState as todoState } from './todo/slice';

const rootReducer = combineReducers({
    todo: todoSlice.reducer,
});

const preloadedState = () => {
    return {
        todo: todoState,
    };
};

const createStore = () => {
    const middlewareList = [...getDefaultMiddleware(), logger];

    return configureStore({
        reducer: rootReducer,
        middleware: middlewareList,
        devTools: process.env.NODE_ENV !== 'production',
        preloadedState: preloadedState(),
    });
};

export default createStore;
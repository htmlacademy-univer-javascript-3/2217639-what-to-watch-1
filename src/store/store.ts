import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { filmReducer } from './slices/filmsSlice';

const rootReducer = combineReducers({
  filmReducer
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

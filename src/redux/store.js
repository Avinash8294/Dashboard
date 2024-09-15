import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from '../redux/darkModeSlice';
import languageReducer from '../redux/languageSlice';

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    language: languageReducer,
  },
});
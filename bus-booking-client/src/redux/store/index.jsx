import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../theme-slice';
import authSlice from '../auth-slice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authSlice
  },
});

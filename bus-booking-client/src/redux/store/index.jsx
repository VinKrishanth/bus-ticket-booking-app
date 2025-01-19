import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../theme-slice';
import authSlice from '../auth-slice';
import bookingSlice from '../Booking-slice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authSlice,
    booking: bookingSlice
  },
});

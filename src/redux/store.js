import { configureStore } from '@reduxjs/toolkit';
import ReservationSlice from './reservation/reservationsSlice';
import ToursSlice from './tours/tours';

const store = configureStore({
  reducer: {
    tours: ToursSlice,
    reservations: ReservationSlice,
  },
});

export default store;

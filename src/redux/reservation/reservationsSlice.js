import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TOKENKEY } from 'util/auth';

const initialState = {
  data: [],
  error: null,
  loading: false,
};

export const fetchReservations = createAsyncThunk('reservations/fetchReservations', async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/reservations`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem(TOKENKEY)) ?? null}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
});

// Define an async thunk to post a new reservation to the API
export const createReservation = createAsyncThunk(
  'reservations/createReservation',
  async ({ reservation, toast, navigate }) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/reservations`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JSON.parse(localStorage.getItem(TOKENKEY)) ?? null}`,
          },
          body: JSON.stringify(reservation),
        },
      );

      if (response.ok) {
        const data = await response.json();
        toast.success('Tour Booked Successfully');
        navigate('/reservations');
        return data;
      }
      return toast.error('Oops Something went wrong. Try again!');
    } catch (error) {
      return error;
    }
  },
);

const ReservationSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReservations.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchReservations.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchReservations.rejected, (state, action) => {
        state.error = action.payload.message;
        state.loading = false;
      })
      .addCase(createReservation.pending, (state) => {
        state.loading = true;
      })
      .addCase(createReservation.fulfilled, (state, action) => {
        state.data.push(action.payload);
        state.loading = false;
      })
      .addCase(createReservation.rejected, (state, action) => {
        state.error = action.payload.error;
        state.loading = false;
      });
  },

});

export default ReservationSlice.reducer;

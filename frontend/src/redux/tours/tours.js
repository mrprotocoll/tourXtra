/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TOKENKEY } from 'util/auth';

export const fetchTours = createAsyncThunk('tours/fetchTours', async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/tours`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
});

export const fetchToursAll = createAsyncThunk('tours/fetchToursAll', async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/my-tours`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(localStorage.getItem(TOKENKEY)) ?? null}`,
    },
  });
  const data = await response.json();
  return data;
});

export const createTour = createAsyncThunk(
  'tour/createTour',
  async ({ tour, toast, navigate }) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/tours`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem(TOKENKEY)) ?? null}`,
          },
          body: tour,
        },
      );

      if (response.ok) {
        const data = await response.json();
        toast.success('Tour Created Successfully');
        navigate('/');
        return data;
      }
      return toast.error('Oops Something went wrong. Try again!');
    } catch (error) {
      return error;
    }
  },
);

export const deleteTour = createAsyncThunk(
  'tours/deleteTour',
  async (tourId) => {
    await fetch(`${process.env.REACT_APP_API_URL}/tours/${tourId}`, {
      method: 'PATCH',
      body: JSON.stringify({ status: true }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem(TOKENKEY)) ?? null}`,
      },
    });
    return tourId;
  },
);

const ToursSlice = createSlice({
  name: 'tours',
  initialState: {
    data: [],
    myTours: [],
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTours.fulfilled, (state, action) => {
        const newArr = action.payload;
        state.data = newArr;
      })

      .addCase(fetchToursAll.fulfilled, (state, action) => {
        state.myTours = action.payload;
      })

      .addCase(deleteTour.fulfilled, (state, action) => {
        const deletedTourId = action.payload;
        // Update the status of the deleted tour in the Redux store
        state.myTours = state.myTours.map((tour) => {
          if (tour.id === deletedTourId) {
            return {
              ...tour,
              status: true,
            };
          }
          return tour;
        });
      })

      .addCase(createTour.pending, (state) => {
        state.loading = true;
      })
      .addCase(createTour.fulfilled, (state, action) => {
        state.data.push(action.payload);
        state.loading = false;
      })
      .addCase(createTour.rejected, (state, action) => {
        state.error = action.payload.error;
        state.loading = false;
      });
  },
});

export default ToursSlice.reducer;

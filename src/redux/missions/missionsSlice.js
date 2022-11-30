import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiURL = 'https://api.spacexdata.com/v3/missions';
const FETCH_MISSIONS = 'FETCH_MISSIONS';

const initialState = {
  missions: [],
  status: null,
};

export const fetchMissions = createAsyncThunk(
  FETCH_MISSIONS,
  async (thunkAPI) => {
    try {
      const missions = await axios.get(apiURL);
      return missions.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

// Slice

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducer: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMissions.pending, (state) => {
        const IsPending = state;
        IsPending.status = 'pending';
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        const IsSucessful = state;
        IsSucessful.status = 'success';
        IsSucessful.Missions = action.payload;
      })

      .addCase(fetchMissions.rejected, (state) => {
        const IsRejected = state;
        IsRejected.status = 'rejected';
      });
  },
});

export default missionSlice.reducer;

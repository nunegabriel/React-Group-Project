import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/extensions
import rocketReducer from './rockets/rocketSlice.js';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
// import rocketReducer from './rockets/rocketSlice';
import PostReducer from './missions/missionSlice';

const store = configureStore({
  reducer: {
    // rockets: rocketReducer,
    post: PostReducer,
  },
});

export default store;

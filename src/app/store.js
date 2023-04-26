import { configureStore } from '@reduxjs/toolkit';
import { foodSlice } from '../features/foodSlice';

const store = configureStore({
  reducer: {
    food: foodSlice.reducer,
  },
});

export default store;

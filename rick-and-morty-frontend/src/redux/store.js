import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favoritesSlice';

export default configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});

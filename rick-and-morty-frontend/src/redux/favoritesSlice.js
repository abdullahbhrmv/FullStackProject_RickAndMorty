import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    characters: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      state.characters.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.characters = state.characters.filter(character => character.id !== action.payload);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export const selectFavorites = state => state.favorites.characters;

export default favoritesSlice.reducer;

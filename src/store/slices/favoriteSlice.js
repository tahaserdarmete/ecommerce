import { createSlice } from '@reduxjs/toolkit';
import { saveFavoritesToStorage } from '../../helper';

const initialState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavoriteItems: (state, action) => {
      state.favorites = action.payload;
    },

    addToFavorites: (state, action) => {
      const exists = state.favorites.some(i => i.id == action.payload.id);

      if (!exists) {
        state.favorites.push(action.payload);
        saveFavoritesToStorage(state.favorites);
      }
    },

    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        item => item.id !== action.payload,
      );
      saveFavoritesToStorage(state.favorites);
    },
  },
});

export const { setFavoriteItems, addToFavorites, removeFromFavorites } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;

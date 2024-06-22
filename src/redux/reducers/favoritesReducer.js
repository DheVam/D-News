import { createReducer } from '@reduxjs/toolkit';
import { addToFavorites, removeFromFavorites } from '../actions/favorites';

const initialState = {
  favorites: [],
};

const favoritesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToFavorites, (state, action) => {
      state.favorites.push(action.payload); 
    })
    .addCase(removeFromFavorites, (state, action) => {
      state.favorites = state.favorites.filter((article) => article.url !== action.payload);
    });
});

export default favoritesReducer;

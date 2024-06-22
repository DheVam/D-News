import { createAction } from '@reduxjs/toolkit';

export const addToFavorites = createAction('favorites/add');
export const removeFromFavorites = createAction('favorites/remove');

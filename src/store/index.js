import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import cartReducer from './slices/cartSlice';
import favoriteReducer from './slices/favoriteSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    favorites: favoriteReducer,
  },
});

export default store;

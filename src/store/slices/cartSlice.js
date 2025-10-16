import { saveCardToStorage } from '../../helper/index';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Sepete elemanları aktaracak fonksiyon
    setCartItems: (state, action) => {
      // Sepete eklenen elemanları state'e aktar
      state.items = action.payload;
    },

    // Sepete ürün ekleyecek fonksiyon
    addToCart: (state, action) => {
      //   Action iöerisindeki payload'e eriş
      const product = action.payload;

      //   Sepete eklenecek ürün sepette var mı kontrol et
      const foundedItem = state.items.find(item => item.id === product.id);

      if (foundedItem) {
        // Ürün miktarını 1 artır
        foundedItem.quantity += 1;
      } else {
        // State içerisindeki items'a product'ı ekle
        state.items.push({ ...product, quantity: 1 });
      }

      // Elemanı localestorage'a kayıt et
      saveCardToStorage(state.items);
    },

    // Sepetteki ürün miktarını güncelleyek fonksiyon
    updateQuantity: () => {},

    // Ürünün mevcut sayısını 1 artıran fonksiyon
    increaseQunatity: (state, action) => {
      const index = state.items.findIndex(item => item.id == action.payload);

      state.items[index].quantity += 1;

      // Elemanı localestorage'a kayıt et
      saveCardToStorage(state.items);
    },

    // Ürünün mevcut sayısını 1 azaltan fonksiyon
    decreaseQunatity: (state, action) => {
      const index = state.items.findIndex(item => item.id == action.payload);

      if (state.items[index].quantity >= 2) {
        state.items[index].quantity -= 1;
      }

      // Elemanı localestorage'a kayıt et
      saveCardToStorage(state.items);
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);

      // Elemanı localestorage'a kayıt et
      saveCardToStorage(state.items);
    },
  },
});

export const {
  setCartItems,
  addToCart,
  updateQuantity,
  increaseQunatity,
  decreaseQunatity,
  removeItem,
} = cartSlice.actions;

export default cartSlice.reducer;

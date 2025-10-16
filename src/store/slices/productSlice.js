import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllProducts } from '../../api/products';

// API' dan verileri alacak async fonksiyon
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => getAllProducts(),
);

// Products Slice oluştur
const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    loading: false,
    error: null,
  },

  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = "Apı' dan ürünleri alınırken hata oluştu.";
      });
  },
});

export default productSlice.reducer;

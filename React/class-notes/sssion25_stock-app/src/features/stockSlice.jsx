import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "stock",

  initialState: {
    purchases: null,
    sales: null,
    products: null,
    brands: null,
    firms: null,
    categories: null,
    loading: false,
    error: false,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getSuccess: (state, { payload: { data, url } }) => {
      state.loading = false;
      state[url] = data;
    },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    getProCatBrandsSuccess: (state, { payload }) => {
      state.loading = false;
      state.products = payload[0];
      state.categories = payload[1];
      state.brands = payload[2];
    },
  },
});

export const { fetchStart, getSuccess, getProCatBrandsSuccess, fetchFail } =
  stockSlice.actions;
export default stockSlice.reducer;

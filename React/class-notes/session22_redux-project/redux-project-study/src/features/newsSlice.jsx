import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  newsList: [],
  loading: false,
  error: false,
};

export const getNews = createAsyncThunk(
  "getNews",

  async () => {
    const API_KEY = "863a838715fe4a28b7b41d53a5db2ab1";
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
    try {
      const { data } = await axios(url);
      return data.articles;
    } catch (error) {
      console.log(error);
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    clearNewsList: (state) => {
      state.newsList = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getNews.fulfilled, (state, { payload }) => {
        state.newsList = payload;
        state.loading = false;
      })
      .addCase(getNews.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export const { clearNewsList } = newsSlice.actions;

export default newsSlice.reducer;

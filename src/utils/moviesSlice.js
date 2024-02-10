import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo:null
  },
  reducers: {
    addNowPlayingMvies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const {addNowPlayingMvies,addTrailerVideo} = moviesSlice.actions;

export default moviesSlice.reducer;
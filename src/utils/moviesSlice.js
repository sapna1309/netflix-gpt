import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    upcomingMovies: null,
    topRatedMovies: null,
    popularMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMvies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPoplarMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
  },
});

export const { addNowPlayingMvies, addTrailerVideo, addPoplarMovies,addUpcomingMovies,addTopRatedMovies } = moviesSlice.actions;

export default moviesSlice.reducer;

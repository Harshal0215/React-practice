import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [
    { id: 1, name: "Radius" },
    { id: 2, name: "Avengers" },
  ],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, actions) => {
      const newMovie = {
        id: state.movies[state.movies.length - 1] + 1,
        name: actions.payload,
      };
      state.movies.push(newMovie);
    },
    removeMovie: (state, actions) => {
      state.movies = state.movies.filter(
        (movie) =>  movie.id !== actions.payload
      );
    },
  },
});

export const { addMovie, removeMovie } = movieSlice.actions;
export default movieSlice.reducer;

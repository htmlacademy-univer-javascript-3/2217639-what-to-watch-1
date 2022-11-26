/* eslint-disable no-console */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { films } from '../../mocks/films';
import { IFilm } from '../../types/Film.interface';

interface IFilmsState {
  genre: string;
  films: IFilm[];
}

const initialState: IFilmsState = {
  genre: 'all',
  films: films
};

const filmsSlice = createSlice({
  initialState,
  name: 'films',
  reducers: {
    getAll(state) {
      state.films = films;
    },
    changeGenre(state, action: PayloadAction<string>) {
      if (action.payload === 'all') {
        state.films = films;
      }
      state.genre = action.payload;
    },
    getByGenre(state) {
      if (state.genre === 'all') {
        state.films = films;
        return;
      }
      state.films = films.filter((film) => film.genre === state.genre);
    }
  },
});

export const { getAll, changeGenre, getByGenre } = filmsSlice.actions;
export const filmReducer = filmsSlice.reducer;

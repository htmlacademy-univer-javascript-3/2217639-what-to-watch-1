import { IFilm } from '../types/Film.interface';

export const getAllGenres = (films: IFilm[]): string[] => [...new Set([...films.map((film) => film.genre)]), 'all'];

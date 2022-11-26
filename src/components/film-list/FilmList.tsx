import { IFilm } from '../../types/Film.interface';
import Film from '../Film';

interface FilmList {
  films: IFilm[];
}

export default function FilmList({ films }: FilmList) {
  return (
    <>
      {
        films.map((film: IFilm) => <Film key={film.id} {...film} />)
      }
    </>
  );
}

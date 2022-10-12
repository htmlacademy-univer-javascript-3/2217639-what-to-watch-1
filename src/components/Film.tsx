import { Link } from 'react-router-dom';
import { IFilm } from '../types/Film.interface';
// import Movie from './movie/Movie';
// interface IHoverHandle {
//   onHover: (id: number) => void;
// }
export default function Film({ date, genre, name, id }: IFilm) {

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width={280} height={175} />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html"><Link to={`/films/${id}`}>{name}</Link></a>
        <p>Genre: {genre}</p>
        <p>Date: {date}</p>
      </h3>
    </article >
  );
}

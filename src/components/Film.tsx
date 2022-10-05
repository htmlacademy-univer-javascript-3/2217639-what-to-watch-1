import { useParams } from 'react-router-dom';
import { IFilm } from '../types/Film.interface';

export default function Film({ date, genre, name }: IFilm) {
  const { id } = useParams();

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width={280} height={175} />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{name}</a>
        <p>Genre: {genre}</p>
        <p>Date: {date}</p>
      </h3>
    </article>
  );
}

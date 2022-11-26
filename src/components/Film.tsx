import { MouseEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { IFilm } from '../types/Film.interface';
import Video from './video/Video';

export default function Film(filmdata: IFilm) {
  const [isHover, setIsHover] = useState<boolean>(false);

  const onHover = (e: MouseEvent) => {
    setIsHover(true);
  };

  const onHoverLeave = (e: MouseEvent) => {
    setIsHover(false);
  };

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={onHover} onMouseLeave={onHoverLeave}>
      <div className="small-film-card__image">
        <Video filmData={filmdata} isPlaying={isHover} />
        {/* // <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width={280} height={175} />} */}
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${filmdata.id}`}>{filmdata.name}</Link>
        <p>Genre: {filmdata.genre}</p>
      </h3>
    </article >
  );
}

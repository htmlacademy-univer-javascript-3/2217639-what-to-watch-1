import { useEffect, useState } from 'react';
import { films } from '../../mocks/films';
import { useAppDispatch } from '../../store/hooks/hooks';
import { changeGenre, getByGenre } from '../../store/slices/filmsSlice';
import { getAllGenres } from '../../utils/getAllGenres';

const genres = getAllGenres(films);

export default function GenresList() {
  const [currentGenre, setCurrentGenre] = useState<string>('all');
  const disptach = useAppDispatch();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, genre: string) => {
    e.preventDefault();
    setCurrentGenre(genre);
  };

  useEffect(() => {
    disptach(changeGenre(currentGenre));
    disptach(getByGenre());
  }, [disptach, currentGenre]);


  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li className={`catalog__genres-item ${currentGenre === genre ? 'catalog__genres-item--active' : ''}`} key={genre}>
          <a href="/"
            className="catalog__genres-link"
            onClick={(e) => handleClick(e, genre)}
          >{genre}
          </a>
        </li>
      ))}
    </ul>
  );
}

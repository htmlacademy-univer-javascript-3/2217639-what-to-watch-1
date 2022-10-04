import Main from '../../pages/Main';
import { IFilm } from '../../types/Film.interface';

interface MainProps {
  films: IFilm[];
}

function App({ films }: MainProps): JSX.Element {
  return <Main films={films} />;
}

export default App;

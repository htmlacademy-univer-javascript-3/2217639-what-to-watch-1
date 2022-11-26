/* eslint-disable no-console */
import Main from '../../pages/Main';
import { useAppSelector } from '../../store/hooks/hooks';

function App(): JSX.Element {
  const films = useAppSelector(({ filmReducer }) => filmReducer.films);
  return <Main films={films} />;
}

export default App;

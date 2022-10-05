import { Link } from 'react-router-dom';

export default function NotFound404() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <Link to={'/'}>Main</Link>
    </div>
  );
}

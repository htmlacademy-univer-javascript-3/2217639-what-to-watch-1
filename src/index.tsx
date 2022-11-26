import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddReview from './components/add-review/AddReview';
import App from './components/app/app';

import Movie from './components/movie/Movie';
import MyList from './components/my-list/MyList';
import Player from './components/player/Player';
import { store } from './store/store';
import NotFound404 from './pages/NotFound404';
import { films } from './mocks/films';
import Private from './pages/Private';
import SignIn from './components/sign-in/SignIn';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='/mylist' element={<Private><MyList films={films} /></Private>} />
          <Route path='*' element={<NotFound404 />} />
          <Route path='/films/:id' element={<Movie />} />
          <Route path='/player/:id' element={<Player films={films} />} />
          <Route path='/films/:id/review' element={<AddReview films={films} />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddReview from './components/add-review/AddReview';
import Movie from './components/movie/Movie';
import MyList from './components/my-list/MyList';
import Player from './components/player/Player';
import SignIn from './components/sign-in/SignIn';
import { films } from './mocks/films';
import Main from './pages/Main';
import NotFound404 from './pages/NotFound404';
import Private from './pages/Private';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main films={films} />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/mylist' element={<Private><MyList films={films} /></Private>} />
        <Route path='*' element={<NotFound404 />} />
        <Route path='/films/:id' element={<Movie />} />
        <Route path='/player/:id' element={<Player films={films} />} />
        <Route path='/films/:id/review' element={<AddReview films={films} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

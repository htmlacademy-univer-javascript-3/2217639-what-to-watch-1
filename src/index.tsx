import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddReview from './components/add-review/AddReview';
import Movie from './components/movie/Movie';
import MyList from './components/my-list/MyList';
import Player from './components/player/Player';
import SignIn from './components/sign-in/SignIn';
import Main from './pages/Main';
import NotFound404 from './pages/NotFound404';
import Private from './pages/Private';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

export const films = [
  {
    name: '1',
    genre: '1',
    date: '1',
    id: 1
  },
  {
    name: '2',
    genre: '2',
    date: '2',
    id: 2
  },
  {
    name: '3',
    genre: '3',
    date: '3',
    id: 3
  },
  {
    name: '4',
    genre: '4',
    date: '4',
    id: 4
  },
  {
    name: '5',
    genre: '5',
    date: '5',
    id: 5
  },
  {
    name: '',
    genre: '',
    date: '',
    id: 6
  },
  {
    name: '',
    genre: '',
    date: '',
    id: 7
  },
  {
    name: '',
    genre: '',
    date: '',
    id: 8
  },
  {
    name: '',
    genre: '',
    date: '',
    id: 9
  },
  {
    name: '',
    genre: '',
    date: '',
    id: 10
  },
  {
    name: '',
    genre: '',
    date: '',
    id: 11
  },
  {
    name: '',
    genre: '',
    date: '',
    id: 12
  },
  {
    name: '',
    genre: '',
    date: '',
    id: 13
  },
  {
    name: '',
    genre: '',
    date: '',
    id: 14
  },
  {
    name: '',
    genre: '',
    date: '',
    id: 15
  }
];

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main films={films} />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/mylist' element={<Private><MyList /></Private>} />
        <Route path='*' element={<NotFound404 />} />
        <Route path='/films/:id' element={<Movie />} />
        <Route path='/player/:id' element={<Player />} />
        <Route path='/films/:id/review' element={<AddReview />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

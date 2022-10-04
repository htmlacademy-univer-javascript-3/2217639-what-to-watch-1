import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

export const films = [
  {
    name: '1',
    genre: '1',
    date: '1',
  },
  {
    name: '2',
    genre: '2',
    date: '2',
  },
  {
    name: '3',
    genre: '3',
    date: '3',
  },
  {
    name: '4',
    genre: '4',
    date: '4',
  },
  {
    name: '5',
    genre: '5',
    date: '5',
  },
  {
    name: '',
    genre: '',
    date: '',
  },
  {
    name: '',
    genre: '',
    date: '',
  },
  {
    name: '',
    genre: '',
    date: '',
  },
  {
    name: '',
    genre: '',
    date: '',
  },
  {
    name: '',
    genre: '',
    date: '',
  },
  {
    name: '',
    genre: '',
    date: '',
  },
  {
    name: '',
    genre: '',
    date: '',
  },
  {
    name: '',
    genre: '',
    date: '',
  },
  {
    name: '',
    genre: '',
    date: '',
  },
  {
    name: '',
    genre: '',
    date: '',
  },
  {
    name: '',
    genre: '',
    date: '',
  },
  {
    name: '',
    genre: '',
    date: '',
  },
  {
    name: '',
    genre: '',
    date: '',
  },
  {
    name: '',
    genre: '',
    date: '',
  },
  {
    name: '',
    genre: '',
    date: '',
  },
];

root.render(
  <React.StrictMode>
    <App films={films} />
  </React.StrictMode>,
);

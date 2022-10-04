import { render, screen } from '@testing-library/react';
import { films } from '../..';
import App from './app';

test('Renders app-component', () => {
  render(<App films={films} />);
  const textElement = screen.getByText(/Hello, world!/i);
  expect(textElement).toBeInTheDocument();
});

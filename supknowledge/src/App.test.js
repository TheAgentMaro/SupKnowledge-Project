import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders home page', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  const headingElement = screen.getByText(/Welcome to the Met Museum!/i);
  expect(headingElement).toBeInTheDocument();
});

test('navigates to object page', () => {
  render(
    <MemoryRouter initialEntries={['/object/123']}>
      <App />
    </MemoryRouter>
  );
  const headingElement = screen.getByText(/Object 123/i);
  expect(headingElement).toBeInTheDocument();
});
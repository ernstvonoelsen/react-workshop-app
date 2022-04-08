import React from 'react';
import { render, screen } from '@testing-library/react';
import { App, Card }  from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('render card', () =>{
  render(<App/>);
  const card = screen.getByText(/card/i);
  expect(card).toBeInTheDocument();
});

test('card')
import React from 'react';
import { render, screen } from '@testing-library/react';

import {App, Card} from './App';

test('renders Card string as implemented componend', () => {
  render(<App />);
  const cardElement = screen.getByText(/CARD/i);
  expect(cardElement).toBeInTheDocument();
});

// test('renders Card object', () => {
//   render(<Card front={'1'} faceUp={true}/>);
//   const card = screen.getByText('1');
//   expect(card).toBeInTheDocument();
// })
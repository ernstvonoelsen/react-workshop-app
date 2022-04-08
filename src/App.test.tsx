import React from 'react';
import { render, screen } from '@testing-library/react';
import {App, Card} from './App';

test('renders Card string as implemented componend', () => {
  render(<App />);
  const cardElement = screen.getByText(/CARD/i);
  expect(cardElement).toBeInTheDocument();
});

test('renders Card object', () => {
  render(<Card index={1}/>);
  const card = screen.getByText(/CARD/i);
  expect(card).toBeInTheDocument();
})
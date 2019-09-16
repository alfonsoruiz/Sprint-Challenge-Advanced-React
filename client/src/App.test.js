import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';
import Nav from './components/Nav';

test('renders without crashing', () => {
  rtl.render(<App />);
});

test('Verify Nav and h1 is in place', () => {
  const nav = rtl.render(<Nav />);
  nav.getByText('Womens World Cup Players By Searches');
});

test('Verify dark mode is present', () => {
  const nav = rtl.render(<Nav />);
  nav.getByTestId(/dark-mode/i);
});

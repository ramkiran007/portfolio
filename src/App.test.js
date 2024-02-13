jest.mock('lottie-web', () => ({
    loadAnimation: jest.fn(),
  }));
  import React from 'react';

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from './App';

test('renders App component', async() => {
    render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );
      console.log(screen.debug());

  const linkElement = await screen.getByText(/learn react/i);

  
  expect(linkElement).toBeInTheDocument();
});

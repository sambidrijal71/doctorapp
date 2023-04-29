import React from 'react'
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // import BrowserRouter
import App from './App';

test('dummy', () => {
  render(
    <Router> {/* Wrap App with the Router */}
      <App />
    </Router>
  );

});
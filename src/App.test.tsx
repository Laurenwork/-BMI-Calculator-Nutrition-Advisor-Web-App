import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BMI calculator title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Kalkulator BMI Olahraga/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders input form', () => {
  render(<App />);
  const heightInput = screen.getByLabelText(/Tinggi/i);
  const weightInput = screen.getByLabelText(/Berat/i);
  expect(heightInput).toBeInTheDocument();
  expect(weightInput).toBeInTheDocument();
});

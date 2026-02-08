// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MetricStream title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MetricStream/i);
    expect(titleElement).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component', () => {
  it('should render a div with class "card"', () => {
    // Render the App component
    render(<App />);

    // Query the div by its class
    const cardDiv = document.querySelector('.card');
    expect(cardDiv).toBeInTheDocument();
    expect(cardDiv).toHaveClass('card');
  });
});

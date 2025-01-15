// App.test.tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component', () => {
  it('should render a div with class "cheezyterm"', () => {
    render(<App />);
    const cardDiv = document.querySelector('.cheezyterm');
    expect(cardDiv).toBeInTheDocument();
    expect(cardDiv).toHaveClass('cheezyterm');
  });
});

import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import CheezyTerminal from '../src/CheezyTerminal';

describe('CheezyTerminal', () => {
  it('renders images (via import.meta.glob) when triggered', async () => {
    render(<CheezyTerminal />);

    // Option 1: Using waitFor
    await waitFor(() => {
      expect(screen.getAllByRole('img').length).toBeGreaterThan(0);
    });

    // Option 2: Using findAllByRole
    // const images = await screen.findAllByRole('img');
    // expect(images.length).toBeGreaterThan(0);
  });
});

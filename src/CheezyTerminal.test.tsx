import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { CheezyTerminal, consoleProfiles } from '../src/index';

describe('CheezyTerminal', () => {
  it('renders images (via import.meta.glob) when triggered', async () => {
    render(<CheezyTerminal
      consoleConfig={consoleProfiles.spaceconsole}
      onTerminalCreated={(term) => {
        term.write('Hello from the space console!\r\n');
      }}
    />);

    // Option 1: Using waitFor
    await waitFor(() => {
      expect(screen.getAllByRole('img').length).toBeGreaterThan(0);
    });

    // Option 2: Using findAllByRole
    // const images = await screen.findAllByRole('img');
    // expect(images.length).toBeGreaterThan(0);
  });
});

import { render } from '@testing-library/react';
import { Terminal } from '@xterm/xterm';
import { describe, it, expect } from 'vitest';
import { CheezyTerminal, consoleProfiles } from '../src/index';

describe('CheezyTerminal', () => {
  it('renders an xterm container', () => {
    render(
      <CheezyTerminal
        consoleConfig={consoleProfiles.spaceconsole}
        onTerminalCreated={(term : Terminal) => {
          term.write('Hello from the space console!\r\n');
        }}
      />
    );

    // The xterm root container has a .xterm class
    const xtermEl = document.querySelector('.xterm');
    expect(xtermEl).not.toBeNull();
  });
});

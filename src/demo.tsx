import React from 'react';
import ReactDOM from 'react-dom';
import { CheezyTerminal, consoleProfiles } from './index';

ReactDOM.render(
  <React.StrictMode>
      <CheezyTerminal
        consoleConfig={consoleProfiles.spaceconsole}
        onTerminalCreated={(term) => {
          term.write('Hello from the space console!\r\n');
        }}
      />
  </React.StrictMode>,
  document.getElementById('root')
);

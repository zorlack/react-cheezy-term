import { useRef, useEffect, useState } from 'react';
import { ReactCheezyTerm, ReactCheezyTermRef, TerminalConfig } from '../lib/ReactCheezyTerm';
import { TerminalPresetPicker } from '../lib/TerminalPresetPicker';

import './App.css';

// Default terminal configuration
const defaultConfig: TerminalConfig = {
  imagePath: 'react-cheezy-term/rectoset.png',
  wrapperWidth: 1216,
  wrapperHeight: 832,
  startX: 283,
  startY: 200,
  consoleWidth: 463,
  consoleHeight: 370,
  cursorBlink: true,
  fontSize: 10,
  xtermTheme: {
    background: '#000000',
    foreground: '#0aff0a',
    cursor: '#00ff00',
    scrollbars: 'none',
  },
};

export default function App() {
  // State to manage the terminal configuration
  const [terminalConfig, setTerminalConfig] = useState<TerminalConfig>(defaultConfig);

  // Create a ref to the ReactCheezyTerm
  const cheezyRef = useRef<ReactCheezyTermRef>(null);

  useEffect(() => {
    // When the component has mounted, we can access the Terminal
    const terminal = cheezyRef.current?.getTerminal();
    if (terminal) {
      // Write something to the terminal
      terminal.write('Welcome to the Cheezy Terminal!\r\n');
    }
  }, []);

  // Handle preset change from TerminalPresetPicker
  const handlePresetChange = (config: TerminalConfig) => {
    console.log('Selected Terminal Config:', config);

    // Update the terminal configuration state
    setTerminalConfig(config);

    // Optionally, update the terminal content directly if necessary
    const terminal = cheezyRef.current?.getTerminal();
    if (terminal) {
      terminal.clear();
      terminal.write(`Loaded preset: ${config.name || 'Unnamed'}\r\n`);
    }
  };

  return (
    <div>
      <ReactCheezyTerm ref={cheezyRef} terminalConfig={terminalConfig} />
      <TerminalPresetPicker onPresetChange={handlePresetChange} />
    </div>
  );
}

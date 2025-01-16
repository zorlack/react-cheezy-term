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
    cursor: '#00ff00'
  },
};

export default function App() {
  const [terminalConfig, setTerminalConfig] = useState<TerminalConfig>(defaultConfig);
  const cheezyRef = useRef<ReactCheezyTermRef>(null);

  useEffect(() => {
    const terminal = cheezyRef.current?.getTerminal();
    if (terminal) {
      terminal.write('Welcome to the Cheezy Terminal!\r\n');
    }
  }, []);

  const handlePresetChange = (config: TerminalConfig) => {
    setTerminalConfig((prevConfig) =>
      JSON.stringify(prevConfig) === JSON.stringify(config) ? prevConfig : config
    );

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


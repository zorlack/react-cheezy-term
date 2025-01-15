import { useRef, useEffect } from 'react';
import { ReactCheezyTerm, ReactCheezyTermRef } from '../lib/ReactCheezyTerm';
import "./App.css";

const config = {
  imagePath: 'react-cheezy-term/rectoset.png',
  wrapperWidth: 1216,
  wrapperHeight: 832,
  startX: 283,
  startY: 200,
  consoleWidth: 463,
  consoleHeight: 370,
  xtermTheme: {
    background: '#000000',
    foreground: '#0aff0a',
    cursor: '#00ff00'
  }
};

export default function App() {
  // Create a ref to the ReactCheezyTerm
  const cheezyRef = useRef<ReactCheezyTermRef>(null);
  const cheezyRefb = useRef<ReactCheezyTermRef>(null);

  useEffect(() => {
    // When the component has mounted, we can access the Terminal
    const terminal = cheezyRef.current?.getTerminal();
    if (terminal) {
      // Write something silly to the terminal
      terminal.write('Welcome to the Cheezy Terminal!\r\n');
    }

    const terminalb = cheezyRefb.current?.getTerminal();
    if (terminalb) {
      // Write something silly to the terminal
      terminalb.write('This is stupid...!\r\n');
    }
  }, []);

  return (
    <div>
      <h1>Cheezy Terminal Example</h1>
      <ReactCheezyTerm ref={cheezyRef} terminalConfig={config} />
      <ReactCheezyTerm ref={cheezyRefb} terminalConfig={config} />
    </div>
  );
}
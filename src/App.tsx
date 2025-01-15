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
  cursorBlink: true,
  fontSize: 10,
  xtermTheme: {
    background: '#000000',
    foreground: '#0aff0a',
    cursor: '#00ff00',
    scrollbars: 'none'
  }
};

export default function App() {
  // Create a ref to the ReactCheezyTerm
  const cheezyRef = useRef<ReactCheezyTermRef>(null);

  useEffect(() => {
    // When the component has mounted, we can access the Terminal
    const terminal = cheezyRef.current?.getTerminal();
    if (terminal) {
      // Write something silly to the terminal
      terminal.write('Welcome to the Cheezy Terminal!\r\n');
    }
  }, []);

  return (
    <div>
      <ReactCheezyTerm ref={cheezyRef} terminalConfig={config} />
    </div>
  );
}
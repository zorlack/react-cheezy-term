import { useRef, useEffect } from 'react';
import { ReactCheezyTerm, ReactCheezyTermRef } from 'react-cheezy-term/dist/ReactCheezyTerm'; // Note: npm defect

const config = {
  imagePath: `./react-cheezy-term/rectoset.png`,
  wrapperWidth: 1216,
  wrapperHeight: 832,
  startX: 283,
  startY: 200,
  consoleWidth: 463,
  consoleHeight: 370,
  fontSize: 10,
  cursorBlink: false,
  xtermTheme: {
    background: '#000000',
    foreground: '#0aff0a',
    cursor: '#00ff00'
  }
};

export default function App() {
  const cheezyRef = useRef<ReactCheezyTermRef>(null);

  useEffect(() => {
    let stopLoop = false; // Control the loop
    let fileContent = ''; // Store the full content of the file

    const fetchContent = async () => {
      const response = await fetch('./fire.terminal.txt');
      if (!response.ok) {
        console.error('Failed to load the file');
        return;
      }
      const text = await response.text();
      fileContent = text; // Store the content in memory
    };

    const writeToTerminal = async (content: string) => {
      const terminal = cheezyRef.current?.getTerminal();
      if (!terminal) {
        console.error('Terminal not initialized.');
        return;
      }

      while (!stopLoop) {
        terminal.clear(); // Clear the terminal for a fresh start
        for (const chunk of content.split('\n')) {
          terminal.write(chunk + '\n'); // Write each line to the terminal
          await new Promise((resolve) => setTimeout(resolve, 50)); // Simulate streaming delay
        }
        await new Promise((resolve) => setTimeout(resolve, 1)); // Delay before looping again
      }
    };

    const initialize = async () => {
      await fetchContent(); // Fetch the file content
      if (fileContent) {
        writeToTerminal(fileContent); // Start writing to the terminal in a loop
      }
    };

    initialize();

    return () => {
      stopLoop = true; // Cleanup the loop on unmount
    };
  }, []);

  return (
    <div>
      <h1>Cheezy Terminal Example</h1>
      <ReactCheezyTerm ref={cheezyRef} terminalConfig={config} />
    </div>
  );
}
